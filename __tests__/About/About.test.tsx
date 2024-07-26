import About from '@/components/About/About';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('About', () => {
    // Test case to check if the about text is rendered correctly
    it('renders about text correctly', () => {
        // Render the About component
        render(<About />);

        // Query the DOM for the element containing the specified text
        const textElement = screen.getByText(/Willkommen auf dem Blog MachtBewusst-Hamburg!/i);

        // Assert that the element is in the document
        expect(textElement).toBeInTheDocument();
    })
})
