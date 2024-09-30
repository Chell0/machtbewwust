import { ThemenCard } from "@/app/lib/interface";
import BlogCard from "@/components/BlogCard/BlogCard";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

// Mock the urlFor function to return a fixed URL
jest.mock("@/app/lib/sanityClient", () => ({
	urlFor: jest.fn(() => ({
		url: () => "/mocked-image-url.jpg",
	})),
}));

describe("BlogCard Component", () => {
	const mockCard: ThemenCard = {
		title: "Test Blog Title",
		smallDescription: "This is a short description of the blog post.",
		currentSlug: "test-blog-title",
		titleImage: "test-blog-image",
		tags: "Test Tag",
	};

	it("renders the BlogCard with correct content", () => {
		render(<BlogCard card={mockCard} />);

		// Check if the title link is rendered correctly
		const titleLink = screen.getByText("Test Blog Title");
		expect(titleLink).toBeInTheDocument();
		expect(titleLink).toHaveAttribute("href", "/themen/test-blog-title");

		// Check if the image is rendered with the correct src
		const image = screen.getByAltText("Test Blog Title");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute(
			"src",
			expect.stringContaining("/_next/image?url=%2Fmocked-image-url.jpg")
		);

		// Check if the description is rendered correctly
		const description = screen.getByText(
			"This is a short description of the blog post."
		);
		expect(description).toBeInTheDocument();
	});
});
