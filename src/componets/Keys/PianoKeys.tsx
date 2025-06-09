"use client";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

interface PianoKeyProps {
  noteFrequency: number;
  noteName: string;
  isSharp: boolean;
  signal: string;
}

const PianoKey = ({
  noteFrequency,
  noteName,
  isSharp,
  signal,
}: PianoKeyProps) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  useEffect(() => {
    const initAudioContext = () => {
      const context = new window.AudioContext();
      setAudioContext(context);
    };

    initAudioContext();
  }, []);

  const playNote = (noteFrequency: number) => {
    if (audioContext) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = signal as OscillatorType;
      oscillator.frequency.setValueAtTime(
        noteFrequency,
        audioContext.currentTime
      );
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2); // Detener después de 0.2 segundos
    }
  };

  const pianoSound = () => {
    // this is to invesetigate a natural piano sound
    if (audioContext) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = 440;

      const envelope = audioContext.createGain();
      envelope.gain.setValueAtTime(0, audioContext.currentTime);
      envelope.gain.exponentialRampToValueAtTime(
        0.5,
        audioContext.currentTime + 0.1
      );
      envelope.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 1.0
      );

      const filter = audioContext.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 5000;

      oscillator.connect(envelope);
      envelope.connect(filter);
      filter.connect(audioContext.destination);

      oscillator.start();
    }
  };

  return (
    <section className="relative flex">
      {isSharp === true ? (
        <button
          className="absolute  -top-16 z-20 h-20 w-8 rounded bg-black   font-bold  text-black "
          onClick={() => playNote(noteFrequency)}
        >
          {noteName}
        </button>
      ) : (
        <button
          className="h-40  w-10 rounded border-2 border-solid border-gray-200 bg-white pl-2 text-white"
          onClick={() => playNote(noteFrequency)}
        >
          {noteName}
        </button>
      )}
    </section>
  );
};

export default PianoKey;
