import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "../components/Section";

describe("Section component", () => {
    const defaultProps = {
        id: "test-section",
        title: "Test Title",
        text: "Test text",
        buttonText: "Test Button",
        buttonLink: "/test-link",
        imageSrc: "/test-image.jpg",
        imageAlt: "Test Image",
    };

    test("renders without crashing", () => {
        render(<Section {...defaultProps} />);
        expect(screen.getByTestId("test-section")).toBeInTheDocument();
    });

    test("displays the title correctly", () => {
        render(<Section {...defaultProps} />);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    test("displays the text correctly", () => {
        render(<Section {...defaultProps} />);
        expect(screen.getByText("Test text")).toBeInTheDocument();
    });

    test("displays the button with the correct text and link", () => {
        render(<Section {...defaultProps} />);
        const button = screen.getByRole("button", { name: "Test Button" });
        expect(button).toBeInTheDocument();
        expect(button.closest("a")).toHaveAttribute("href", "/test-link");
    });

    test("displays the image with the correct src and alt", () => {
        render(<Section {...defaultProps} />);
        const image = screen.getByAltText("Test Image");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "/test-image.jpg");
    });

    test("displays the correct order when reverse prop is not set", () => {
        render(<Section {...defaultProps} />);
        const section = screen.getByTestId("test-section");
        const sectionChildren = section.children;
        expect(sectionChildren[0].querySelector("img")).toBeInTheDocument();
        expect(sectionChildren[1].querySelector("h4")).toBeInTheDocument();
    });

    test("displays the correct order when reverse prop is set", () => {
        render(<Section {...defaultProps} reverse />);
        const section = screen.getByTestId("test-section");
        const sectionChildren = section.children;
        expect(sectionChildren[0].querySelector("h4")).toBeInTheDocument();
        expect(sectionChildren[1].querySelector("img")).toBeInTheDocument();
    });

    test("renders correctly on mobile devices", () => {
        // Mock the useMediaQuery hook to simulate mobile devices
        jest
            .spyOn(require("@mui/system"), "useMediaQuery")
            .mockImplementation(() => true);

        render(<Section {...defaultProps} />);
        const section = screen.getByTestId("test-section");
        const sectionChildren = section.children;
        expect(sectionChildren.length).toBe(2);
        expect(sectionChildren[0].querySelector("img")).toBeInTheDocument();
        expect(sectionChildren[1].querySelector("h4")).toBeInTheDocument();
    });
});
