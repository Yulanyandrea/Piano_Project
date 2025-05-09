import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ButtonComponent, { ButtonType } from "./ButtonComponent";
import PianoImage from "../Images/pianoImage";
import { useRouter } from "next/router";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Piano button", () => {
  it("renders button with the correct image", () => {
    render(
      <ButtonComponent ariaLabel="piano" className={ButtonType.PIANO}>
        <PianoImage />
      </ButtonComponent>
    );
    const pianoButton = screen.getByRole("button");
    expect(pianoButton).toBeInTheDocument();
  });

  it("renders button with the correct image", () => {
    render(
      <ButtonComponent ariaLabel="voice" className={ButtonType.VOICE}>
        <PianoImage />
      </ButtonComponent>
    );
    const voiceButton = screen.getByRole("button");
    expect(voiceButton).toBeInTheDocument();
  });

  it("renders button with the correct image", () => {
    render(
      <ButtonComponent ariaLabel="drums" className={ButtonType.VOICE}>
        <PianoImage />
      </ButtonComponent>
    );
    const voiceButton = screen.getByRole("button");
    expect(voiceButton).toBeInTheDocument();
  });

  it("renders button with the correct image", () => {
    render(
      <ButtonComponent ariaLabel="guitar" className={ButtonType.VOICE}>
        <PianoImage />
      </ButtonComponent>
    );
    const voiceButton = screen.getByRole("button");
    expect(voiceButton).toBeInTheDocument();
  });
});
