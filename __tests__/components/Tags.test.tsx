import React from "react";
import Tags from "@/components/Tags/Tags";
import { render, screen, fireEvent } from "@testing-library/react";


describe("Tags Component", () => {
  const mockTags = [{ title: "Tag1" }, { title: "Tag2" }, { title: "Tag3" }];

  it("toggles the dropdown menu in mobile view", () => {
    const mockOnTagSelect = jest.fn();

    render(<Tags tags={mockTags} onTagSelect={mockOnTagSelect} />);

    fireEvent.click(screen.getByText("Select Tag"));

    const allViewAllButtons = screen.queryAllByText("View All");
    // Assuming the first button is within the dropdown (mobile view)
    const dropdownViewAllButton = allViewAllButtons[0];
    fireEvent.click(dropdownViewAllButton);

    expect(mockOnTagSelect).toHaveBeenCalledWith(null); // Expecting null for "View All" click
  });

  it("calls onTagSelect with the correct tag when a tag is clicked", () => {
    const mockOnTagSelect = jest.fn();

    render(<Tags tags={mockTags} onTagSelect={mockOnTagSelect} />);

    fireEvent.click(screen.getByText("Select Tag"));

    const tagButtons = screen.getAllByText("#Tag2");
    fireEvent.click(tagButtons[1]);

    expect(mockOnTagSelect).toHaveBeenCalledWith("Tag2");
  });
});
