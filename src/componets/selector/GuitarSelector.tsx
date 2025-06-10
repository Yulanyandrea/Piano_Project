import "tailwindcss/tailwind.css";

const GuitarSelector = () => {
  return (
    <section className="flex justify-around">
      <select name="notes" className="">
        {/*  add notes */}

        <option value="C">C</option>
      </select>

      <select name="type">
        {/* add escale */}
        <option value="Major">Major</option>
      </select>
      <select name="scale">
        <option value="scale">Scale</option>
        <option value="Pentatonic">Pentatonic</option>
      </select>
    </section>
  );
};

export default GuitarSelector;
