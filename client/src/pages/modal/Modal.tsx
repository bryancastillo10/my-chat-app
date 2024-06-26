import { useState, useEffect, ReactElement, useCallback } from "react";
import { CircleX } from "lucide-react";
// interface ModalProps {
//   isOpen?: boolean;
//   onClose: () => void;
//   title: string;
//   subtitle?: string;
//   body?: ReactElement;
//   disabled?: boolean;
//   action: () => void;
//   actionLabel: string;
//   secondaryAction?: () => void;
//   secondaryActionLabel?: string;
// }

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [showModal, setShowModal] = useState<boolean | undefined>(isOpen);

  // Opening the Modal
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  //   Closing the Modal
  const handleCloseModal = useCallback(() => {
    //   if (disabled) {
    //     return;
    //   }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, []);

  // ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
  return (
    <>
      {/* Modal Content */}
      <div
        className={`absolute translate duration-300 w-full h-full ${
          showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="relative h-full translate md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-[80%] mx-auto bg-slate-400 outline-none focus:outline-none">
          {/* Header */}
          <div className="relative flex items-center p-6 justify-center rounded-t">
            <button
              onClick={handleCloseModal}
              className="p-1 border-0 hover:opacity-70 transition absolute right-9 hover:text-rose-500"
            >
              <CircleX />
            </button>
            <div className="font-bold text-lg">Update Profile Picture</div>
          </div>
          {/* Body  */}
          <div className="relative p-6 flex-auto">Write some content here</div>
          {/* Button Sections */}
          <div className="flex flex-col gap-2 p-6">
            <div className="flex flex-row justify-center items-center gap-4 w-full">
              <button>Update</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
