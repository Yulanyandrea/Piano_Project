import { useEffect } from "react";

interface DrumsProps {
  sound: string;
}

const DrumsKeys = ({ sound }: DrumsProps) => {
  useEffect(() => {
    const audioContext = new window.AudioContext(); //  Crea una instancia de AudioContext, que es la base de la Web Audio API.
    const audio = new Audio(`${sound}`);
    audio.play();
  }, []);

  return <></>;
};

export default DrumsKeys;
