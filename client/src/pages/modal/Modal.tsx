import { useState, useEffect, ReactElement, useCallback } from "react";
import { Button } from "../../components";
import { CircleX } from "lucide-react";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  body?: ReactElement;
  disabled?: boolean;
  action: () => void;
  actionLabel: string;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  body,
  disabled,
  action,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState<boolean | undefined>(isOpen);

  // Opening the Modal
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  //   Closing the Modal
  const handleCloseModal = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose,disabled]);

  return (
    <>
      {/* Modal Content */}
      <div
        className={`absolute z-50 top-12  translate duration-300 w-[85%] h-full ${
          showModal
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative translate md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-[80%] mx-auto modal-glassmorphism outline-none focus:outline-none">
          {/* Header */}
          <div className="relative flex items-center p-6 justify-between rounded-t">
            <button
              onClick={handleCloseModal}
              className="p-1 border-0 hover:opacity-70 transition absolute right-9 hover:text-rose-500"
            >
              <CircleX />
            </button>
            <div className="flex flex-col">
              <h1 className="font-bold tracking-wide text-lg text-emerald-400">
                {title}
              </h1>
              <p className="text-md text-white">{subtitle}</p>
            </div>
          </div>
          {/* Body  */}
          <div className="relative p-6 flex-auto text-white">{body}</div>
          {/* Button Sections */}
          <div className="flex flex-col gap-2 p-6">
            <div className="flex flex-row justify-center items-center gap-4 w-full">
              <Button disabled={disabled} type="button" variant="accept" action={action}>
                {actionLabel}
              </Button>
              {secondaryAction && secondaryActionLabel && (
                <Button type="button" variant="cancel" action={secondaryAction}>
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
