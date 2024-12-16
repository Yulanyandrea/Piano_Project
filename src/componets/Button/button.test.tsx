import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent, { ButtonType } from "./ButtonComponent";
import PianoImage from "../Images/pianoImage";
import { useRouter } from "next/router";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: mockPush,
    query: {},
  }),
}));

describe("Piano button", () => {
  it("renders button with the correct image", () => {
    render(
      <ButtonComponent
        ariaLabel="piano"
        role="piano"
        className={ButtonType.PIANO}
      >
        <PianoImage />
      </ButtonComponent>
    );
    const pianoButton = screen.getByRole("piano");
    expect(pianoButton).toBeInTheDocument();
  });

  it("renders button with the correct image", () => {
    render(
      <ButtonComponent
        ariaLabel="voice"
        role="voice"
        className={ButtonType.VOICE}
      >
        <PianoImage />
      </ButtonComponent>
    );
    const voiceButton = screen.getByRole("voice");
    expect(voiceButton).toBeInTheDocument();
  });

  it("navigates to a specific page", () => {
    render(
      <ButtonComponent
        ariaLabel="piano"
        role="piano"
        className={ButtonType.PIANO}
      >
        <PianoImage />
      </ButtonComponent>
    );

    const button = screen.getByRole("piano");

    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/instruments/piano");
  });
});
