"use client"
import { useState,useEffect } from 'react';
import PianoKey from '../componets/pianoKey/PianoKeys';
import Selector from '@/componets/selector/Selector';
import { useAppDispatch, useAppSelector } from './store/store';
import { getInstruments } from '../features/piano/pianoSlice'

const Home = () => {
  const [wave, setWave] = useState('')
  const dispatch = useAppDispatch();
  const getSharpNotes = useAppSelector((state) => state.pianoKeys.bankSound)
  
  useEffect(()=>{
    dispatch(getInstruments())
  },[])
  const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];

  const handleChangeWave = (waveform:string) => {
    setWave(waveform)
  }
  
  return (
    <main className='bg-cyan-200 h-screen'>
        <p className='bg-gray h-12 text-center text-orange-600 pt-8 pb-20'/>
        <section className='flex  justify-around'>
          <section  className= "flex justify-center mx-0 my-0 w-30 h-20 items-center">
            <Selector valueChange={handleChangeWave}/>
            {
              getSharpNotes.map((note:any)=> {
                return (
                  <PianoKey key={note._id} noteFrequency={note.frequency} noteName={note.note} isSharp={sharpNotes.includes(note.note)} signal={wave}  /> 
                )
              })
            }
          </section>
          
        

      </section>
      
    </main> 
  );
};

export default Home;
