import { render, screen } from "@testing-library/react";
import Newsletter from "@/components/Newsletter/Newsletter";
import '@testing-library/jest-dom';

describe("Newsletter component", () => {
    it("renders the newsletter title", () => {
        render(<Newsletter />);

        // Verify that the newsletter title is rendered
        const titleElement = screen.getByText(/Anmeldung zum Newsletter/i);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass("text-orange-500");
    });

    it("renders the 'Anmelden' button with correct attributes", () => {
        render(<Newsletter />);

        // Verify that the 'Anmelden' button is rendered with correct attributes
        const linkElement = screen.getByRole('link', { name: /Anmelden/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "https://39dff525.sibforms.com/serve/MUIFAOZ7L48ggutm_jNF7tYry6C5ZYqVW8siJVL8b884tlY5b1VNz1FhlCnABBVeJNpk5uoeBUwZCxreapwZngQmf7hmmmkeduQwCzNri_t920cVKW9kkgE_S-4s5FxL1vrftWnBNIJFz78O5c5zMtTeZy62Qb3b8Sdq1pZbEVAnVFz9EZXogILY5tfmN-Gk8QEG6IyJldrXKxRr");
        expect(linkElement).toHaveAttribute("target", "_blank");
        expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
        expect(linkElement).toHaveClass("bg-orange-500 hover:bg-gray-500 hover:text-white text-white font-semibold text-md no-underline py-2 px-4 rounded-xl");
    });
});
