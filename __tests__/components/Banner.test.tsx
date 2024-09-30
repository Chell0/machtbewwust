import Banner from "@/components/Banner/Banner";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

describe("Banner Component", () => {
	it("renders the banner image with correct src", () => {
		render(<Banner />);

		const bannerImage = screen.getByAltText("Banner Image");

		// Check if the image is present
		expect(bannerImage).toHaveAttribute(
			"src",
			expect.stringContaining("/_next/image?url=%2Fmachtbewusst.png")
		);
	});
});
