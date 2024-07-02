import { ChangeEvent, FormEvent, useCallback } from "react";
import { Button, FieldInput, FieldSelect } from "../../components";
import useAddProfileInfo from "../../hooks/useAddProfileInfo";
import useViewProfileModal from "../../store/useViewProfileModal";

const MoreProfileInfoForm = () => {
  const { profileInfo, setProfileInfo } = useViewProfileModal();
  const { loading, addProfileInfo } = useAddProfileInfo();

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setProfileInfo({ ...profileInfo, [e.target.id]: e.target.value });
    },
    [profileInfo]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await addProfileInfo();
    },
    [profileInfo]
  );
  console.log(profileInfo);
  return (
    <div className="absolute z-10 border-none bg-slate-500/40 rounded-xl p-4">
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
};

export default MoreProfileInfoForm;
