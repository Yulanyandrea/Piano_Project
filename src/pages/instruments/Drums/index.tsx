import "tailwindcss/tailwind.css";
import DrumsKeys from "@/componets/Keys/DrumsKeys";

const Drums = () => {
  const path = [1];
  return (
    <section className="flex ">
      {path.map((drumPath: any) => {
        return (
          <button
            className="h-40 w-40 border-4  border-solid border-red-300 bg-red-400 hover:shadow-xl hover:shadow-pink-500"
            key={drumPath.id}
          >
            <DrumsKeys />
          </button>
        );
      })}
    </section>
  );
};

export default Drums;
