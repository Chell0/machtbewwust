import { MaterialCard } from "@/app/lib/interface";
import MaterialCards from "@/components/MaterialCards/MaterialCards";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

// Mock the urlFor function
jest.mock("@/app/lib/sanityClient", () => ({
	urlFor: jest.fn(() => ({
		url: () => "https://example.com/image.jpg",
	})),
}));

describe("MaterialCards Component", () => {
	const mockCard: MaterialCard = {
		title: "Test Material",
		titleImage: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
		smallDescription: "This is a description of the test material.",
		links: "https://example.com",
	};

	it("renders the image with correct attributes", () => {
		render(<MaterialCards card={mockCard} />);

		const image = screen.getByAltText(mockCard.title);
		expect(image).toBeInTheDocument();

		// Check that the src contains the expected URL pattern
		const imageSrc = image.getAttribute("src");
		expect(imageSrc).toMatch(
			/\/_next\/image\?url=https%3A%2F%2Fexample\.com%2Fimage\.jpg/
		);

		// Check other attributes
		expect(image).toHaveAttribute("alt", mockCard.title);
		expect(image).toHaveAttribute("height", "150");
		expect(image).toHaveAttribute("width", "150");
	});

	it("renders the title and description correctly", () => {
		render(<MaterialCards card={mockCard} />);

		// Check that the title is rendered correctly and is a link
		const titleElement = screen.getByText(mockCard.title);
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveAttribute("href", mockCard.links);

		// Check that the description is rendered correctly
		const descriptionElement = screen.getByText(mockCard.smallDescription);
		expect(descriptionElement).toBeInTheDocument();
	});
});
