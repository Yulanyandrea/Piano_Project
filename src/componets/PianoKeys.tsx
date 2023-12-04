"use client"
import { useState, useEffect } from 'react';

interface PianoKeyProps {
  noteFrequency: number;
}

const PianoKey = ({ noteFrequency }:PianoKeyProps) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  useEffect(() => {
    const initAudioContext = () => {
      const context = new (window.AudioContext)();
      setAudioContext(context);
    };

    initAudioContext();
  }, []);

  const playNote = (noteFrequency: number) => {
    if (audioContext) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(noteFrequency, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2); // Detener después de 0.2 segundos
    }
  };

  return (
    <>
      <button className= "bg-white w-10 h-16" onClick={() => playNote(noteFrequency)}/>
      <button className= "bg-black w-5 h-16" onClick={() => playNote(noteFrequency)}/>
    
    </>
   
  );
};

export default PianoKey;