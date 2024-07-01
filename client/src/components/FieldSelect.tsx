import  { useState } from 'react';
import AsyncSelect, { AsyncProps } from "react-select/async";
import { MultiValue, SingleValue } from "react-select";


interface HobbyOption {
  label: string;
  value: number;
}

const hobbyOptions: HobbyOption[] = [
  { label: "dancing", value: 1 },
  { label: "singing", value: 2 },
  { label: "gardening", value: 3 }
];

const FieldSelect = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hobby, setHobby] = useState<MultiValue<HobbyOption> | SingleValue<HobbyOption>>();

    const loadOptions: AsyncProps<HobbyOption, boolean, never>['loadOptions'] = (inputValue, callback) => {
        setTimeout(() => {
            console.log("load Options", inputValue);
            callback(hobbyOptions.filter(option => 
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            ));
        }, 2000);
    };

    const handleOptions = (selections: MultiValue<HobbyOption> | SingleValue<HobbyOption>) => {
        console.log("handleChange", selections);
        setHobby(selections);
    };

    return (
        <div className="field-select">
            <AsyncSelect
                defaultOptions={hobbyOptions}
                loadOptions={loadOptions}
                onChange={handleOptions}
                isMulti
            />
        </div>
    );
};

export default FieldSelect;
