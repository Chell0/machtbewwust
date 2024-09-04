import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { client as sanityClient, urlFor } from "@/app/lib/sanityClient";
import Category from "@/components/MaterialSection/MaterialSection";


// Mock the fetch function and urlFor function on the Sanity client
jest.mock("@/app/lib/sanityClient", () => ({
    client: {
        fetch: jest.fn(),
    },
    urlFor: jest.fn(() => ({
        url: () => '/mock-image-url.png',
    })),
}));

describe("MaterialSection Component", () => {
    const mockCategories = [
        {
            title: "MaterialSection 1",
            materials: [
                {
                    title: "Material 1",
                    titleImage: {
                        _type: "image",
                        asset: {
                            _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
                            _type: "reference",
                        }
                    },
                    smallDescription: "Description 1",
                    links: []
                },
                // Add more materials if needed
            ],
        },
    ];

    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'error').mockImplementation(() => { }); // Suppress console errors
    });

    it("renders categories and materials correctly", async () => {
        (sanityClient.fetch as jest.Mock).mockResolvedValue(mockCategories);

        await act(async () => {
            render(<Category />);
        });

        expect(screen.getByText("MaterialSection 1")).toBeInTheDocument();

        // Adjust expected length based on what your component actually renders
        const materialItems = screen.getAllByText("Material 1");
        expect(materialItems.length).toBeGreaterThan(0); // Ensure there is at least one "Material 1"
    });

    it("handles no categories correctly", async () => {
        (sanityClient.fetch as jest.Mock).mockResolvedValue([]);

        await act(async () => {
            render(<Category />);
        });

        expect(screen.queryByText("MaterialSection 1")).not.toBeInTheDocument();
    });

    it("handles fetch error gracefully", async () => {
        (sanityClient.fetch as jest.Mock).mockRejectedValue(new Error("Fetch failed"));

        await act(async () => {
            render(<Category />);
        });

        // Ensure that fetch error handling is verified
        expect(screen.queryByText("MaterialSection 1")).not.toBeInTheDocument();
        expect(screen.queryByText("Material 1")).not.toBeInTheDocument();
    });
});
