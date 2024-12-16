"use client";
import { useRouter } from "next/navigation";
import PianoImage from "@/componets/Images/pianoImage";
import VoiceImage from "@/componets/Images/VoiceImage";
import DrumsImage from "@/componets/Images/DrumsImage";
import GuitarImage from "@/componets/Images/GuitarImage";
import ButtonComponent, {
  ButtonType,
} from "@/componets/Button/ButtonComponent";

const Home = () => {
  const router = useRouter();

  const handleClickPiano = () => {
    console.log("Botón clicado");
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
            <ButtonComponent
              ariaLabel="piano"
              role="piano"
              className={ButtonType.PIANO}
              onClick={handleClickPiano}
            >
              <PianoImage />
            </ButtonComponent>

            <ButtonComponent
              ariaLabel="voice"
              role="voice"
              className={ButtonType.VOICE}
              onClick={handleClickVoice}
            >
              <VoiceImage />
            </ButtonComponent>
          </section>

          <section className="flex">
            <ButtonComponent
              ariaLabel="drums"
              role="drums"
              className={ButtonType.DRUMS}
              onClick={handleClickDrums}
            >
              <DrumsImage />
            </ButtonComponent>

            <ButtonComponent
              ariaLabel="guitar"
              role="guitar"
              className={ButtonType.GUITAR}
              onClick={handleClickDrums}
            >
              <GuitarImage />
            </ButtonComponent>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
