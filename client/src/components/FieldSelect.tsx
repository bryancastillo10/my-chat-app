import AsyncSelect from "react-select/async";
import { MultiValue, SingleValue } from "react-select";
import fetchHobbyOptions, { HobbyOption } from "../utils/fetchHobbyOptions";
import useUpdateProfileModal from "../store/useUpdateProfileModal";
import selectStyles from "../utils/selectStyles";

const FieldSelect = () => {
  const { profileInfo, setProfileInfo } = useUpdateProfileModal();

  const loadOptions = async (inputValue: string) => {
    const hobbyOptions = await fetchHobbyOptions();
    return hobbyOptions.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleOptions = (
    selections: MultiValue<HobbyOption> | SingleValue<HobbyOption>
  ) => {
    if (Array.isArray(selections)) {
      const newHobbies = selections.map((select) => select.value);
      setProfileInfo({ ...profileInfo, hobbies: newHobbies });
    }
  };

  return (
    <div className="field-select">
      <AsyncSelect<HobbyOption, true, never>
        placeholder="Select at least 3 Hobbies"
        styles={selectStyles}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onChange={handleOptions}
        isMulti
      />
    </div>
  );
};

export default FieldSelect;
