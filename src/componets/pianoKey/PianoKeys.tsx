"use client"
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import '../../styles/globals.css'

interface PianoKeyProps {
  noteFrequency: number;
  noteName:string;
  isSharp:boolean;
  signal:string;
  
}

const PianoKey = ({ noteFrequency,noteName, isSharp,signal}:PianoKeyProps) => {
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
      oscillator.type = signal as OscillatorType;
      oscillator.frequency.setValueAtTime(noteFrequency, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.2); // Detener después de 0.2 segundos
    }
  };

  return (
    <section>
      { isSharp === true ? <button className="bg-black text-white font-bold rounded w-8 h-20" onClick={() => playNote(noteFrequency)}>{noteName}</button> :
        <button className= "bg-white w-8 h-20 pl-2 rounded"  onClick={() => playNote(noteFrequency)}>{noteName}</button>
      }
      
    </section>
   
  );
};

export default PianoKey;
