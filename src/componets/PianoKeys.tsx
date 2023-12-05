"use client"
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface PianoKeyProps {
  noteFrequency: number;
  noteName:string;
  isSharp:boolean;
}

const PianoKey = ({ noteFrequency,noteName, isSharp }:PianoKeyProps) => {
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
    <section className='bg-white h-10'>
      { isSharp === true ? <button className= "bg-black w-60 h-5" onClick={() => playNote(noteFrequency)}>{noteName}</button> :
        <button className= "bg-orange-800 w-60 h-16" onClick={() => playNote(noteFrequency)}>{noteName}</button>
      }
      
    </section>
   
  );
};

export default PianoKey;
