import { useState, useEffect, useCallback } from "react";
import { Button } from "../../components";

interface SubModalProps{
    isOpen: boolean;
    onClose: () => void;
}


const SubModal = ({isOpen,onClose}:SubModalProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    
    // Opening the modal
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])
    
    // Closing the modal
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    return (
<div className="absolute z-50  w-full top-[200px]">
            <div className={`flex flex-col max-w-[50%] mx-auto glassmorphism min-h-[100px] p-4
            translate duration-500 rounded-xl ${
            showModal
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
            }     
            `}>
            <h1>Are you sure you want to delete your SpaceChat account</h1>
            <div className="flex justify-center gap-2">
                <Button
                type="button"
                variant="accept"    
                >
                Yes
                </Button>
                <Button
                type="button"
                variant="cancel"
                action={handleCloseModal}
                >
                Cancel
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SubModal;
