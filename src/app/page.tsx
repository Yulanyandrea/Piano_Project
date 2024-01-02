"use client"
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PianoKey from '../componets/pianoKey/PianoKeys';
import Selector from '@/componets/selector/Selector';
import { useAppDispatch, useAppSelector } from './store/store';
import { getInstruments } from '../features/piano/pianoSlice'

const Home = () => {
  const [wave, setWave] = useState('')
  const dispatch = useAppDispatch();
  const getSharpNotes = useAppSelector((state) => state.pianoKeys.bankSound)
  console.log(getSharpNotes,'notes')
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
  useEffect(()=>{
    dispatch(getInstruments())
  },[])
  const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
  let notesValues = Object.entries(notesObj);

  const handleChangeWave = (waveform:string) => {
    setWave(waveform)
  }
  
  return (
    <main className='bg-lime-200 w-30 h-80'>
        <p className='bg-gray h-12 text-center text-orange-600 pt-8 pb-20'>Synthesizer</p>
        <section className='flex  justify-around'>
          <section  className= "flex justify-center mx-0 my-0 w-30 h-20 items-center">
            <Selector valueChange={handleChangeWave}/>
            {notesValues.map(([key, value]) => (
              
                <PianoKey key={value} noteFrequency={value} noteName={key} isSharp={sharpNotes.includes(key)} signal={wave}  /> 

            ))}
          </section>
          
        

      </section>
      
    </main> 
  );
};

export default Home;
