import { useState } from "react";
import AsyncSelect from "react-select/async";
import { MultiValue, SingleValue } from "react-select";
import fetchHobbyOptions, { HobbyOption } from "../utils/fetchHobbyOptions";
import selectStyles from "../utils/selectStyles";

const FieldSelect = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hobby, setHobby] = useState<
    MultiValue<HobbyOption> | SingleValue<HobbyOption>
  >();

  console.log(hobby);

  const loadOptions = async (inputValue: string) => {
    const hobbyOptions = await fetchHobbyOptions();
    return hobbyOptions.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const handleOptions = (
    selections: MultiValue<HobbyOption> | SingleValue<HobbyOption>
  ) => {
    setHobby(selections);
  };

  return (
    <div className="field-select">
      <AsyncSelect<HobbyOption, true, never>
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
