import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import Home from "./page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText("Let's create your own music");
    expect(heading).toBeInTheDocument();
  });

  //Piano
  it("should navigate to /instruments/Piano when piano button is clicked", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Home />);
    const pianoButton = screen.getByRole("button", { name: /piano/i });
    await userEvent.click(pianoButton);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/instruments/Piano");
    });
  });

  // Voice
  it("should navigate to /instruments/Voice when voice button is clicked", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Home />);
    const voiceButton = screen.getByRole("button", { name: /voice/i });
    await userEvent.click(voiceButton);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/instruments/Voice");
    });
  });

  //drums
  it("should navigate to /instruments/Drums when drums button is clicked", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Home />);
    const drumsButton = screen.getByRole("button", { name: /drums/i });
    await userEvent.click(drumsButton);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/instruments/Drums");
    });
  });

  //guitar
  it("should navigate to /instruments/Guitar when guitar button is clicked", async () => {
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    render(<Home />);
    const guitarButton = screen.getByRole("button", { name: /guitar/i });
    await userEvent.click(guitarButton);

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith("/instruments/Guitar");
    });
  });
});
