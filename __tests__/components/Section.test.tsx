import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import Section from "@/components/Section/Section";

// Mock the MaterialCards component
jest.mock("@/components/MaterialCards/MaterialCards", () => ({
  __esModule: true,
  default: jest.fn(({ card }) => <div>{card.title}</div>),
}));

describe("Section Component", () => {
  const mockMaterials = [
    {
      title: "Material 1",
      titleImage: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
          _type: "reference",
        },
      },
      smallDescription: "Description 1",
      links: [],
    },
    {
      title: "Material 2",
      titleImage: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
          _type: "reference",
        },
      },
      smallDescription: "Description 2",
      links: [],
    },
    {
      title: "Material 3",
      titleImage: {
        _type: "image",
        asset: {
          _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
          _type: "reference",
        },
      },
      smallDescription: "Description 3",
      links: [],
    },
  ];

  it("renders slider with material cards", () => {
    const { container } = render(<Section materials={mockMaterials} />);

    // Verify Slider component is rendered by checking for its class
    const sliderElement = container.querySelector(".slick-slider");
    expect(sliderElement).toBeInTheDocument();

    // Verify each MaterialCard title is present in the document
    mockMaterials.forEach((material) => {
      // Count the number of occurrences of the material title
      const elements = screen.getAllByText(material.title);
      expect(elements.length).toBeGreaterThanOrEqual(1); // Ensure at least one instance is present
    });
  });

  it("renders no materials correctly", () => {
    const { container } = render(<Section materials={[]} />);

    // Verify Slider component is rendered by checking for its class
    const sliderElement = container.querySelector(".slick-slider");
    expect(sliderElement).toBeInTheDocument();

    // Verify no MaterialCards are rendered
    mockMaterials.forEach((material) => {
      expect(screen.queryByText(material.title)).not.toBeInTheDocument();
    });
  });
});
