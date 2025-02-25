import { useState, useEffect } from "react";
import Selector from "@/componets/selector/Selector";
import PianoKey from "@/componets/Keys/PianoKeys";
import { getAllInstruments } from "../../../features/piano/pianoApi";

const Piano = () => {
  const [wave, setWave] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllInstruments();
        setNotes(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];

  const handleChangeWave = (waveform: string) => {
    setWave(waveform);
  };

  return (
    <section className="h-screen bg-cyan-200">
      <p className="bg-gray h-12 pb-20 pt-8 text-center text-orange-600" />
      <section className="flex  justify-around">
        <section className="w-30 mx-0 my-0 flex h-20 items-center justify-center">
          <Selector valueChange={handleChangeWave} />
          {notes.map((note: any) => {
            return (
              <PianoKey
                key={note._id}
                noteFrequency={note.frequency}
                noteName={note.note}
                isSharp={sharpNotes.includes(note.note)}
                signal={wave}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Piano;
