import "tailwindcss/tailwind.css";
import DrumsKeys from "@/componets/pianoKey/DrumsKeys";

const Drums = () => {
  return (
    <section className="flex ">
      <button className="h-40 w-40 border-4  border-solid border-red-300 bg-red-400 hover:shadow-red-500">
        <DrumsKeys />
      </button>
    </section>
  );
};

export default Drums;
