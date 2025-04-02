import "tailwindcss/tailwind.css";
import DrumsKeys from "@/componets/Keys/DrumsKeys";
import { useEffect, useState } from "react";
import { getAllSound } from "@/features/drums/drumsApi";

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

  return (
    <section className="flex ">
      {sound.map((drumPath: any) => {
        return (
          <button
            className="h-40 w-40 border-4  border-solid border-red-300 bg-red-400 hover:shadow-xl hover:shadow-pink-500"
            key={drumPath._id}
          >
            <DrumsKeys sound={drumPath.sound} />
          </button>
        );
      })}
    </section>
  );
};

export default Drums;
