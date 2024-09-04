import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import About from "@/components/About/About";



describe("About", () => {
    test("About component renders correctly", () => {
        render(<About />);

        // Check if this text is present
        const aboutText = screen.getByText(/Willkommen auf dem Blog MachtBewusst-Hamburg!/i);
        expect(aboutText).toBeInTheDocument();
    });
});
