"use client"
import PianoKey from '../componets/PianoKeys';
import 'tailwindcss/tailwind.css'

const Home = () => {
  let notesObj = {
    "C": 261.63,
    "C#":277.183,
    "D":293.665
  }
  let notesValues = Object.entries(notesObj);
  
  return (
    <main>
       <section  className= "bg-lime-200 w-30 h-40">
          <p className='bg-gray h-12 text-center text-orange-600 pt-8'>Synthetizer</p>
          {notesValues.map(([key, value]) => (
 
            <PianoKey noteFrequency={value} noteName={key} /> 
          
          ))}
       </section>
        
      
    </main>
  );
};

export default Home;
