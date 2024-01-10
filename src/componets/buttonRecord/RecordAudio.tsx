import { useState, useRef} from 'react';


const RecordAudio = () => {
    const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log('Audio URL:', audioUrl);
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

    return(
        <section>
            <button className="bg-red-700 rounded-full py-1.5 px-3" onClick={startRecording}>Record</button>
            <button className="bg-neutral-400 rounded-full py-1.5 px-3" onClick={stopRecording}>Stop</button>
            <button className="bg-green-700 rounded-full py-1.5 px-3">Play</button>
        </section>
    )
}

export default RecordAudio;