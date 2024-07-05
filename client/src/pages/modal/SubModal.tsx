import { useState, useEffect, useCallback } from "react";
import { Button } from "../../components";

interface SubModalProps {
  isOpen: boolean;
  content: string;
  action?: () => void;
  disabled?: boolean;
  onClose: () => void;
}

const SubModal = ({
  isOpen,
  onClose,
  content,
  disabled,
  action,
}: SubModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Opening the modal
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Closing the modal
  const handleCloseModal = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  return (
    <div className="absolute z-0 w-full top-[200px]">
      <div
        className={`flex flex-col max-w-[50%] mx-auto glassmorphism min-h-[100px] p-4
            translate duration-500 rounded-xl ${
              showModal
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "translate-y-full opacity-0 pointer-events-none"
            }     
            `}
      >
        <div className="my-4 max-w-[90%] mx-auto">
          <p className="text-center text-white leading-sm">{content}</p>
        </div>
        <div className="flex justify-center gap-2">
          <Button
            type="button"
            variant="accept"
            disabled={disabled}
            action={action}
          >
            Yes
          </Button>
          <Button type="button" variant="cancel" action={handleCloseModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubModal;
