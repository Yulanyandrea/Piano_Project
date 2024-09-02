interface modalProps {
  isOpen: boolean;
  onClose: any;
  title: string;
}

const ModalText = ({ title, isOpen, onClose }: modalProps) => {
  if (!isOpen) return null;
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
      <section className="w-1/3 rounded-lg bg-white p-6">
        <h2 className="text-lg font-semibold">{title}</h2>

        <section className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-indigo-400 px-4 py-2 text-white"
          >
            Close
          </button>
        </section>
      </section>
    </section>
  );
};

export default ModalText;
