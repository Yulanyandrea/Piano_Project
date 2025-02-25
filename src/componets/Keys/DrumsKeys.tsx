import { useEffect } from "react";

const DrumsKeys = () => {
  useEffect(() => {
    const audioContext = new window.AudioContext(); //  Crea una instancia de AudioContext, que es la base de la Web Audio API.
    const audio = new Audio("/sounds/kick.wav");
    audio.play();
  }, []);

  return <></>;
};

export default DrumsKeys;
