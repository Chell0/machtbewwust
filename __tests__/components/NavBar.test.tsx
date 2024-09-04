import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import NavBar from "@/components/NavBar/NavBar";



describe("NavBar", () => {
    // Test if the nav element exists
    test("renders the nav element", () => {
        render(<NavBar />);
        const navElement = screen.getByRole("navigation");
        expect(navElement).toBeInTheDocument();
    });

    // Test links to different pages
    test("contains links to different pages", () => {
        render(<NavBar />);
        const links = [
            { name: /Themen/i, href: "/themen" },
            { name: /Material/i, href: "/material" },
            { name: /Datenbank/i, href: "/datenbank" },
            { name: /Kalender/i, href: "/kalender" },
        ];

        links.forEach(({ name, href }) => {
            const linkElement = screen.getByRole("link", { name });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute("href", href);
        });
    });

    // Test the mobile menu functionality
    // it("toggles the mobile menu when the button is clicked", () => {
    //     render(<NavBar />);
    //     const menuButton = screen.getByRole("button");

    //     // Initially, the mobile links should not be visible
    //     expect(screen.queryByText(/Themen/i)).not.toBeNull();
    //     expect(screen.queryByText(/Material/i)).not.toBeNull();
    //     expect(screen.queryByText(/Datenbank/i)).not.toBeNull();
    //     expect(screen.queryByText(/Kalender/i)).not.toBeNull();

    //     // Click to open the mobile menu
    //     fireEvent.click(menuButton);
    //     // Now the mobile links should be visible
    //     expect(screen.getByText(/Themen/i)).toBeVisible();
    //     expect(screen.getByText(/Material/i)).toBeVisible();
    //     expect(screen.getByText(/Datenbank/i)).toBeVisible();
    //     expect(screen.getByText(/Kalender/i)).toBeVisible();

    //     // Click to close the mobile menu
    //     fireEvent.click(menuButton);
    //     // The mobile links should no longer be visible
    //     expect(screen.queryByText(/Themen/i)).not.toBeVisible();
    //     expect(screen.queryByText(/Material/i)).not.toBeVisible();
    //     expect(screen.queryByText(/Datenbank/i)).not.toBeVisible();
    //     expect(screen.queryByText(/Kalender/i)).not.toBeVisible();
    // });

    // Test if the logo is present
    test("displays the logo with correct alt text and link", () => {
        render(<NavBar />);
        const logoLink = screen.getByRole("link", { name: /ossara logo/i });
        const logoImage = screen.getByAltText("Ossara Logo");

        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute("href", "https://www.ossara.de");
        expect(logoImage).toBeInTheDocument();
    });
});
