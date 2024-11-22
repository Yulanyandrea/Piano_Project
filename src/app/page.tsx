"use client";
import { useRouter } from "next/navigation";
import PianoImage from "@/componets/Images/pianoImage";
import VoiceImage from "@/componets/Images/VoiceImage";
import DrumsImage from "@/componets/Images/DrumsImage";
import GuitarImage from "@/componets/Images/GuitarImage";

const buttonStyle = {
  measurement:
    "h-36 w-36 mr-2.5 mb-2.5 flex justify-center items-center border-4 ",
};

const Home = () => {
  const router = useRouter();

  const handleClickPiano = () => {
    router.push("/instruments/Piano");
  };

  const handleClickVoice = () => {
    router.push("/instruments/Voice");
  };

  const handleClickDrums = () => {
    router.push("/instruments/Drums");
  };
  return (
    <>
      <h1 className=" flex flex-col items-center bg-stone-900 py-4 font-PlayfairDisplay text-4xl  text-white">
        Let's create your own music
      </h1>
      <main className="flex h-screen justify-center bg-stone-900">
        <section className="flex flex-col justify-center">
          <section className="flex">
            <button
              className={`rounded-md border-pink-200  bg-indigo-400  ${buttonStyle.measurement} hover:shadow-xl hover:shadow-pink-500`}
              onClick={handleClickPiano}
              aria-label="pianoImage"
              role="piano"
            >
              <PianoImage />
            </button>

            <button
              className={`rounded-md border-yellow-500 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-yellow-700`}
              onClick={handleClickVoice}
              role="voice"
            >
              <VoiceImage />
            </button>
          </section>

          <section className="flex">
            <button
              className={`rounded-md border-green-300 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-green-700 `}
              onClick={handleClickDrums}
            >
              <DrumsImage />
            </button>

            <button
              className={`rounded-md border-cyan-400 bg-indigo-400 ${buttonStyle.measurement} hover:shadow-xl hover:shadow-cyan-700`}
            >
              <GuitarImage />
            </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
