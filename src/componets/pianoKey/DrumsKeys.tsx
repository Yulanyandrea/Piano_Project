import { useEffect } from "react";

const DrumsKeys = () => {
  useEffect(() => {
    const audioContext = new window.AudioContext(); //  Crea una instancia de AudioContext, que es la base de la Web Audio API.
    const buffers: AudioBuffer[] = [];
    const loadSound = (url: string, index: number) => {
      //Esta función carga los archivos de audio usando fetch y los decodifica con audioContext.decodeAudioData.
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) =>
          audioContext.decodeAudioData(arrayBuffer, (buffer) => {
            buffers[index] = buffer;
          })
        );
    };

    const playSound = (index: number) => {
      // Esta función crea un nodo BufferSource para reproducir el audio cargado.
      if (buffers[index]) {
        const source = audioContext.createBufferSource();
        source.buffer = buffers[index];
        source.connect(audioContext.destination);
        source.start();
        setTimeout(() => source.stop(), 1000);
      }
    };

    // Cargar los sonidos
    loadSound("/sounds/kick.wav", 0);

    const playDrumBeat = () => {
      //Esta función programa la reproducción de los sonidos de batería usando setTimeout para crear un ritmo simple.
      playSound(0);
    };

    const intervalId = setInterval(playDrumBeat, 1000);
    return () => clearInterval(intervalId); // El return dentro de useEffect limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria.
  }, []);

  return <></>;
};

export default DrumsKeys;
