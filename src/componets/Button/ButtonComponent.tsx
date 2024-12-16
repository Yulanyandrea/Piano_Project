const buttonVariation = {
  piano: {
    iconStyle: "rounded-md border-pink-200  bg-indigo-400",
    hover: " hover:shadow-xl hover:shadow-pink-500",
  },
  voice: {
    iconStyle: "rounded-md border-yellow-500 bg-indigo-400",
    hover: "hover:shadow-xl hover:shadow-yellow-700",
  },
  drums: {
    iconStyle: "rounded-md border-green-300 bg-indigo-400 ",
    hover: "hover:shadow-xl hover:shadow-green-700",
  },
  guitar: {
    iconStyle: "rounded-md border-cyan-400 bg-indigo-400 ",
    hover: "hover:shadow-xl hover:shadow-cyan-700",
  },
};

export enum ButtonType {
  PIANO = "piano",
  DRUMS = "drums",
  VOICE = "voice",
  GUITAR = "guitar",
}

interface ButtonProps {
  ariaLabel: string;
  role: string;
  className: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonStyle = {
  measurement:
    "h-36 w-36 mr-2.5 mb-2.5 flex justify-center items-center border-4 ",
};

const ButtonComponent = ({
  ariaLabel,
  role,
  className = ButtonType.PIANO,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`${buttonVariation[className].iconStyle} ${buttonStyle.measurement} ${buttonVariation[className].hover} `}
        aria-label={ariaLabel}
        role={role}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonComponent;
