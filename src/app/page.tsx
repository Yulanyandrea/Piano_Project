"use client"
import PianoKey from '../componets/PianoKeys';

const Home = () => {
  
  return (
    <main>
        <section className="piano">
          <PianoKey noteFrequency={261.63}  /> {/* C4 */}
          <PianoKey noteFrequency={277.183}  /> 
        
        </section>
      
    </main>
  );
};

export default Home;
