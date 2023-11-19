const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-full md:w-3/4 flex flex-col ">
        <button
          className="text-white text-sm md:text-xl md:place-self-end "
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
