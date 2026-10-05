import "./css/components.css";

type ModalProps = {
  align: "center" | "left-align";
  heading: string;
  subtext?: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
  onClose?: () => void;
  showModal: boolean;
};

export const Modal = ({
  align,
  heading,
  subtext,
  buttonText,
  onClick,
  onClose,
  showModal,
}: ModalProps) => {
  return (
    <div
      className={`h-screen w-screen items-center flex justify-center modal-background ${
        !showModal && "hidden"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose?.();
        }
      }}
    >
      <div
        className={`bg-pink-400 rounded-xl modal shadow-2xl bounce p-10 ${
          align === "center" && "flex justify-center items-center"
        }`}
      >
        <div
          className={`p-8
           ${align === "center" && "items-center flex-col"}`}
        >
          <div className={`${align === "center" && "flex justify-center"}`}>
            <h1 className="font-roboto-bold pt-2 pb-4 text-3xl">{heading}</h1>
          </div>

          <div>{subtext}</div>

          <div
            className={` pt-6 ${align === "center" && "flex justify-center"}`}
          >
            <button className="button" type="button" onClick={onClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
