"use client"
import PianoKey from '../componets/pianoKey/PianoKeys';
import Selector from '@/componets/selector/Selector';

const Home = () => {
  let notesObj = {
    "C": 261.63,
    "C#":277.183,
    "D": 293.665,
    "D#": 311.127,
    "E": 329.628,
    "F": 349.228,
    "F#": 369.994,
    "G": 391.995,
    "G#": 415.305,
    "A": 440.000,
    "A#": 466.164,
    "B":493.883
  }
  const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
  let notesValues = Object.entries(notesObj);
  
  return (
    <main className='bg-lime-200 w-30 h-80'>
        <p className='bg-gray h-12 text-center text-orange-600 pt-8 pb-20'>Synthesizer</p>
        <section className='flex  justify-around'>
          <section  className= "flex justify-center mx-0 my-0 w-30 h-20 items-center">
            
            {notesValues.map(([key, value]) => (
              
                <PianoKey key={value} noteFrequency={value} noteName={key} isSharp={sharpNotes.includes(key)} signal={"triangle"}  /> 

            ))}
          </section>
          
        <Selector/>

      </section>
      
    </main> 
  );
};

export default Home;
