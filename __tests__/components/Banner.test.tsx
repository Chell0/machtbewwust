import { describe, expect, test } from "@jest/globals";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Banner from "@/components/Banner/Banner";


describe("Banner Component", () => {
    test("renders the banner image with correct src", () => {
        render(<Banner />);

        const bannerImage = screen.getByAltText("Banner Image");

        // Check if the image is present
        expect(bannerImage).toHaveAttribute("src", expect.stringContaining("/_next/image?url=%2Fmachtbewusst.png"));
    });
});
