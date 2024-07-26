import { render } from "@testing-library/react";
import About from "@/components/About/About";

// Snapshot test case
it("renders aboutpage unchanged", () => {
	// Render the About component and get a fragment of the rendered output
	const { container } = render(<About />);

	// Assert that the rendered output matches the snapshot
	expect(container).toMatchSnapshot();
});
