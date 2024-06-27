import Modal from "./Modal";
import useProfilePicModal from "../../store/useProfilePicModal";
import useProfilePicChoices from "../../hooks/useProfilePicChoices";

const UpdateProfilePicModal = () => {
  const { isOpen, onClose, selectedProfPic, setSelectedProfPic } =
    useProfilePicModal();
  const { loading, profPicChoices } = useProfilePicChoices();

  const handleSelectPic = (pic: string) => {
    setSelectedProfPic(pic);
  };

  const body = (
    <div className="place-items-center">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {loading ? (
          <span className="spinner loading-spinner"></span>
        ) : (
          profPicChoices.map((pic, index) => (
            <div key={index} onClick={() => handleSelectPic(pic)}>
              <img
                className={`size-14 hover:scale-110 duration-500 ease-in-out cursor-pointer
                ${selectedProfPic === pic ? "rounded-xl bg-emerald-500" : ""}`}
                src={pic}
                alt={`Profile choice ${index}`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="You can Change Profile Picture"
      subtitle="Choose from the following profile picture"
      body={body}
      actionLabel="Update Profile Picture"
      action={() => {}}
      secondaryAction={onClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default UpdateProfilePicModal;
