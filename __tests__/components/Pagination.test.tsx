import Pagination from "@/components/Pagination/Pagination";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Pagination component", () => {
    it("renders page buttons and calls onPageChange on click", () => {
        const mockOnPageChange = jest.fn();
        const currentPage = 2;
        const totalPages = 5;

        render(
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={mockOnPageChange} />
        );

        // Verify all page buttons are rendered
        const pageButtons = screen.getAllByRole("button");
        expect(pageButtons.length).toBe(totalPages);

        // Verify active page button styling
        const activeButton = screen.getByText(`${currentPage}`);
        expect(activeButton).toHaveClass("bg-white text-orange-400");

        // Simulate click on a different page button
        const nextPageButton = screen.getByText(`${currentPage + 1}`);
        fireEvent.click(nextPageButton);

        // Verify onPageChange is called with the clicked page number
        expect(mockOnPageChange).toHaveBeenCalledWith(currentPage + 1);
    });
});
