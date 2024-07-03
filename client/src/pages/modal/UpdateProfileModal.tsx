import { ChangeEvent, FormEvent, useCallback } from "react";
import Modal from "./Modal";
import { FieldInput, FieldSelect, Button } from "../../components";
import useAddProfileInfo from "../../hooks/user/useAddProfileInfo";
import useUpdateProfileModal from "../../store/useUpdateProfileModal";

const UpdateProfileInfoForm = () => {
  const { profileInfo, setProfileInfo, isOpen, onClose } =
    useUpdateProfileModal();
  const { loading, addProfileInfo } = useAddProfileInfo();

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setProfileInfo({ ...profileInfo, [e.target.id]: e.target.value });
    },
    [profileInfo, setProfileInfo]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addProfileInfo();
      onClose();
    },
    [addProfileInfo]
  );

  const body = (
    <div className="max-w-[80%] mx-auto ">
      <h1>Share more information about you</h1>
      <form className="flex flex-col gap-2">
        <div className="flex gap-4">
          <FieldInput
            textLabel="Birthday"
            id="birthday"
            value={profileInfo.birthday}
            type="date"
            onChange={onChangeInput}
          />
          <FieldInput
            textLabel="Motto"
            id="motto"
            value={profileInfo.motto}
            type="text"
            onChange={onChangeInput}
          />
        </div>
        <FieldSelect />
        <Button
          disabled={loading}
          action={handleSubmit}
          type="submit"
          variant="accept"
        >
          Add Profile Info
        </Button>
      </form>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      disabled={loading}
      title="Update Profile Information"
      subtitle="Share information about you"
      body={body}
      actionLabel="Update Profile"
      action={() => {}}
      secondaryAction={onClose}
      secondaryActionLabel="Cancel"
    />
  );
};

export default UpdateProfileInfoForm;
