import { render, screen } from "@testing-library/react";
import { describe, it, expect } from '@jest/globals';
import ShowMoreButton from "@/components/ShowMoreButton/ShowMoreButton";

describe("ShowMoreButton Component", () => {
    const href = "/more";
    const label = "Show More";

    it("renders the button with the correct label", () => {
        render(<ShowMoreButton href={href} label={label} />);

        // Check that the link is rendered with the correct label
        const linkElement = screen.getByText(label);
        expect(linkElement).toBeInTheDocument();
    });

    it("renders the link with the correct href attribute", () => {
        render(<ShowMoreButton href={href} label={label} />);

        // Check that the link has the correct href attribute
        const linkElement = screen.getByText(label);
        expect(linkElement).toHaveAttribute("href", href);
    });

    it("applies the correct styles", () => {
        render(<ShowMoreButton href={href} label={label} />);

        // Check styles applied to the link
        const linkElement = screen.getByText(label);
        expect(linkElement).toHaveClass("text-orange-600");
        expect(linkElement).toHaveClass("font-bold");
        expect(linkElement).toHaveClass("text-lg");
        expect(linkElement).toHaveClass("hover:text-stone-600");
    });
});
