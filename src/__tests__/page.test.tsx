import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Home from "../app/page";
import PianoImage from "@/componets/Images/pianoImage";
import Router from "next/router";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("Let's create your own music");

    expect(heading).toBeInTheDocument();
  });
});

///// Buttons

describe("Piano button", () => {
  it("renders button with correct image", () => {
    render(<Home />);
    const pianoButton = screen.getByRole("piano");
    expect(pianoButton).toBeInTheDocument();
  });

  it("find by aria-label", () => {
    const { getByRole } = render(
      <button
        aria-label="pianoImage"
        className="mb-2.5 mr-2.5  flex  h-36 w-36 items-center justify-center rounded-md border-4 border-pink-200 bg-indigo-400  hover:shadow-xl hover:shadow-pink-500"
        role="piano"
      />
    );
    const buttonTest = getByRole("piano", { name: "pianoImage" });
    expect(buttonTest).toBeTruthy();
  });
});
