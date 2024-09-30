import About from "@/components/About/About";
import { describe, expect, it } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";

// Mock the sanity client
jest.mock("@/app/lib/sanityClient", () => ({
	client: {
		fetch: jest.fn().mockResolvedValue({
			content:
				"Willkommen auf dem Blog MachtBewusst-Hamburg! Hier dreht sich alles um machtkritische und" +
				" dekoloniale Perspektiven der Hamburger Zivilgesellschaft.",
		}),
	},
}));

describe("About", () => {
	it("renders the About component correctly with fetched content", async () => {
		render(<About />);

		// Wait for the content to appear
		const aboutText = await waitFor(() =>
			screen.getByText(/Willkommen auf dem Blog MachtBewusst-Hamburg!/i)
		);

		// Assert that the content is in the document
		expect(aboutText).toBeInTheDocument();
	});
});
