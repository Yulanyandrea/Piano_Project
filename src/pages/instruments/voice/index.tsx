import { useState } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";

const buttonStyle = {
  playIcon:
    "M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-.4C5.8 11 4 9.4 4 7.5V5c-.6 0-1 .4-1 1v1.5c0 2.2 1.8 4.1 4 4.4V14c-3 0-2.5 2-2.5 2h7s.5-2-2.5-2v-2.1c2.2-.4 4-2.2 4-4.4V6c0-.6-.4-1-1-1z",
  microphoneIcon:
    "M8 10c-1.7 0-3-1.3-3-3V3c0-1.6 1.3-3 3-3c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3z",
  stopIcon:
    "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13zM5 5h6v6H5z",
  buttonAtributes:
    "relative rounded-full border-4  border-solid border-indigo-500 bg-black p-5 hover:shadow-xl hover:shadow-indigo-500",
};

const Voice = () => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [chunks, setChunks] = useState<Blob[]>([]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true }) // select audio
      .then((stream) => {
        const recorder = new MediaRecorder(stream); // create instance recorder
        recorder.ondataavailable = (event) => {
          setChunks((prevChunks) => [...prevChunks, event.data]); // save it
        };
        recorder.start();
        setMediaRecorder(recorder);
      })
      .catch((error) => {
        console.error("Error al obtener el stream de audio:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      if (chunks.length > 0) {
        const audioBlob = new Blob(chunks, {
          type: "audio/wav; codecs=opus",
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Reproducir el audio
        const audioElement = new Audio(audioUrl);
        audioElement.oncanplaythrough = () => {
          audioElement.play();
        };
        //audioElement.play();
        console.log("Recording stopped. Audio URL:", audioUrl);
      }
      setChunks([]);
    }
  };

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-black">
      <Image
        src="/sound.jpg"
        alt="wave sound"
        width={10000}
        height={100}
        className="absolute flex"
      />
      <button
        className={`${buttonStyle.buttonAtributes}`}
        onClick={startRecording}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 16 16"
          color="white"
        >
          <path fill="currentColor" d={`${buttonStyle.microphoneIcon}`} />
          <path fill="currentColor" d={`${buttonStyle.playIcon}`} />
        </svg>
      </button>
      <button
        className={`${buttonStyle.buttonAtributes}`}
        onClick={stopRecording}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 16 16"
          color="white"
        >
          <path fill="currentColor" d={`${buttonStyle.stopIcon}`} />
        </svg>
      </button>
    </section>
  );
};

export default Voice;
