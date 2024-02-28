import { useState, useEffect } from 'react';
import Selector from '@/componets/selector/Selector';
import PianoKey from '@/componets/pianoKey/PianoKeys';
import {getAllInstruments} from '../../../features/piano/pianoApi';


const Piano = () => {
    const [wave, setWave] = useState('')
    const [notes, setNotes] = useState([]); 
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAllInstruments();
          setNotes(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

 const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];

  const handleChangeWave = (waveform:string) => {
   setWave(waveform)
   }

 return (
    <section className='bg-cyan-200 h-screen'>
        <p className='bg-gray h-12 text-center text-orange-600 pt-8 pb-20'/>
        <section className='flex  justify-around'>
          <section  className= "flex justify-center mx-0 my-0 w-30 h-20 items-center">
            <Selector valueChange={handleChangeWave}/>
            {
              notes.map((note:any)=> {
                return (
                  <PianoKey key={note._id} noteFrequency={note.frequency} noteName={note.note} isSharp={sharpNotes.includes(note.note)} signal={wave}  /> 
                )
              })
            } 
          </section>
          
          
      </section>
      
    </section> 
 );
};

export default Piano;