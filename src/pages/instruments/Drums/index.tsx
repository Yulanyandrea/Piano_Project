import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { getAllSound } from "@/features/drums/drumsApi";
import objectRandom from "@/features/drums/drumsRandom";

const buttonStyle = {
  syle1: "bg-teal-200 hover:shadow-xl",
  style2: "bg-purple-400 hover:shadow-xl",
  style3: "bg-sky-500 hover:shadow-xl",
  style4: "bg-green-400 hover:shadow-xl",
};

const Drums = () => {
  const [sound, setSound] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllSound();
        setSound(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const playSound = (soundPath: string) => {
    //  Crea una instancia de AudioContext, que es la base de la Web Audio API.
    const audioElement = new Audio(soundPath);
    audioElement.play();
  };

  return (
    <section className="flex h-screen flex-row items-center justify-center bg-indigo-950">
      {sound.map((drumPath: any) => {
        return (
          <button
            className={`h-40 w-40 border-4  border-solid border-red-300 ${objectRandom(
              buttonStyle
            )} hover:shadow-pink-500`}
            key={drumPath._id}
            onClick={() => {
              playSound(drumPath.sound);
            }}
          />
        );
      })}
    </section>
  );
};

export default Drums;
