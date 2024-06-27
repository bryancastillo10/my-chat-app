import Modal from "./Modal";
import useUpdateProfilePic from "../../store/useUpdateProfilePic";
import useProfilePicChoices from "../../hooks/useProfilePicChoices";

const UpdateProfilePicModal = () => {
  const updateProfilePic = useUpdateProfilePic();
  const { loading, profPicChoices } = useProfilePicChoices();

  const body = (
    <div className="place-items-center">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {loading ? (
          <span className="spinner loading-spinner"></span>
        ) : (
          profPicChoices.map((pic, index) => (
            <img
              className="size-14 hover:scale-110 duration-500 ease-in-out"
              key={index}
              src={pic}
              alt={`Profile choice ${index}`}
            />
          ))
        )}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={updateProfilePic.isOpen}
      onClose={updateProfilePic.onClose}
      title="You can Change Profile Picture"
      subtitle="Choose from the following profile picture"
      body={body}
      actionLabel="Update Profile Picture"
      action={() => {}}
      secondaryAction={updateProfilePic.onClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default UpdateProfilePicModal;
