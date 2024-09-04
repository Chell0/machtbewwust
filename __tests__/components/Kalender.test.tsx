import Kalender from "@/components/Kalender/Kalender";
import { render, screen, fireEvent, act } from "@testing-library/react";


jest.mock("@/app/lib/sanityClient", () => ({
    client: {
        fetch: jest.fn(() => Promise.resolve([])), // Mock empty events
    },
}));

describe("Kalender component", () => {
    it("renders title, description, and search bar", async () => {
        render(<Kalender />);

        // Verify title
        const title = screen.getByText("Veranstaltungskalender");
        expect(title).toBeInTheDocument();

        // Verify description
        const description = screen.getByText(
            /An dieser Stelle könnt Ihr eine Vielzahl an aktuellen Veranstaltungsterminen entdecken/i
        );
        expect(description).toBeInTheDocument();

        // Verify search bar
        const searchBar = screen.getByPlaceholderText("Filter events...");
        expect(searchBar).toBeInTheDocument();
    });

    it("renders events and toggles details", async () => {
        // Mock event data
        const mockEvents = [
            {
                title: "Sample Event 1",
                date: "2024-08-30",
                time: "10:00",
                type: "Workshop",
                description: "This is a sample event description.",
                detailsLink: "https://example.com/event-details",
            },
            {
                title: "Sample Event 2",
                date: "2024-08-31",
                time: "14:00",
                type: "Talk",
                description: "Another sample event description.",
                detailsLink: "https://example.com/event-details-2",
            },
        ];

        jest.mock("@/app/lib/sanityClient", () => ({
            client: {
                fetch: jest.fn(() => Promise.resolve(mockEvents)),
            },
        }));

        render(<Kalender />);

        // Wait for data fetching (might need adjustment based on your implementation)
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Verify number of events
        const events = screen.getAllByRole("heading", { level: 3 }); // Assuming headings are used for event titles
        expect(events.length).toBe(mockEvents.length);

        // Test toggling event details
        const firstEventButton = screen.getByRole("button", { name: "toggle details" }); // Assuming a descriptive name for the button
        fireEvent.click(firstEventButton);

        // Verify description and link are displayed for the opened event
        const firstEventDescription = screen.getByText(mockEvents[0].description);
        const firstEventLink = screen.getByRole("link", { name: "details" });
        expect(firstEventDescription).toBeInTheDocument();
        expect(firstEventLink).toBeInTheDocument();

        // Test closing event details
        fireEvent.click(firstEventButton);
        expect(firstEventDescription).not.toBeInTheDocument();
        expect(firstEventLink).not.toBeInTheDocument();
    });

    // Add more tests for search functionality, error handling, etc.
});
