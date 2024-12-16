import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Home from "../app/page";
import PianoImage from "@/componets/Images/pianoImage";
import Router from "next/router";

//Mock useRouter:
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
