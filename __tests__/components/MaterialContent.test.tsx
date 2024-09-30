import { fetchMaterialAbout } from "@/app/lib/fetchMaterialAbout";
import MaterialContent from "@/components/MaterialContent/MaterialContent";
import { beforeEach, describe, expect, it } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";


// Mock fetchMaterialAbout function
jest.mock("@/app/lib/fetchMaterialAbout");

describe("MaterialContent", () => {
	it("should render material content correctly after fetching", async () => {
		// Mock data to be returned by fetchMaterialAbout
		const mockAboutData = {
			title: "Sample Title",
			body: [
				{
					_type: "block",
					children: [{ _type: "span", text: "This is a sample body text." }],
				},
			],
		};

		// Set the mock implementation of fetchMaterialAbout to resolve with the mock data
		(fetchMaterialAbout as jest.Mock).mockResolvedValue(mockAboutData);

		// Render the component
		render(<MaterialContent />);

		// Assert that the title is rendered correctly
		await waitFor(() => {
			expect(screen.getByText("Sample Title")).toBeInTheDocument();
		});

		// Assert that the body text is rendered correctly
		expect(screen.getByText("This is a sample body text.")).toBeInTheDocument();
	});

	it("should display a loading state initially", () => {
		// Render the component
		render(<MaterialContent />);

		// Assert that the initial state is an empty title (or some loading indicator, if implemented)
		expect(screen.queryByText(/Sample Title/i)).not.toBeInTheDocument();
	});
});
