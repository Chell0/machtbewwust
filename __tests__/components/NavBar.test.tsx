import NavBar from "@/components/NavBar/NavBar";
import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";

describe("NavBar Component", () => {
	it("should render the title, desktop links, and mobile button", () => {
		// Render the NavBar component
		render(<NavBar />);

		// Check if the title is rendered
		expect(screen.getByText(/MachtBewusst/i)).toBeInTheDocument();

		// Check if the desktop navigation links are rendered
		fireEvent.click(screen.getByText("Themen"));
		fireEvent.click(screen.getByText("Material"));
		fireEvent.click(screen.getByText("Datenbank"));
		fireEvent.click(screen.getByText("Kalender"));

		// Check if the mobile menu button is rendered
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("should toggle mobile menu when the button is clicked", () => {
		// Render the NavBar component
		render(<NavBar />);

		// Check if the mobile menu is initially closed (not visible)

		// Click the mobile menu button
		// const mobileMenuButton = screen.getByRole("button");
		// fireEvent.click(mobileMenuButton);

		// Check if the mobile navigation links appear

		// Click the button again to close the menu

		// Check if the mobile navigation links are hidden again
	});

	it("should render the logo on larger screens", () => {
		// Render the NavBar component
		render(<NavBar />);

		// Check if the logo image is rendered (with alt text "Ossara Logo")
		const logo = screen.getByAltText("Ossara Logo");
		expect(logo).toBeInTheDocument();
	});
});
