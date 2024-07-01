import { HobbyOption } from "./fetchHobbyOptions";
import { StylesConfig } from "react-select"

const selectStyles: StylesConfig<HobbyOption, true,never> = {
    control: (originalStyle) => ({
        ...originalStyle,
        backgroundColor: "#F4F3F2",
        borderColor: "#CCC",
    }),
    option: (originalStyle, state) => ({
        ...originalStyle,
        backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#f8f9fa' : '#F4F3F2',
        color: state.isSelected ? 'white' : 'black',
    }),
    multiValue: (originalStyle) => ({
        ...originalStyle,
        backgroundColor: '#e9ecef',
    }),
    multiValueLabel: (originalStyle) => ({
        ...originalStyle,
        color: 'black',
    }),
    multiValueRemove: (originalStyle) => ({
        ...originalStyle,
        color: 'black',
        ':hover': {
            backgroundColor: '#dc3545',
            color: 'white',
        },
    }),
};

export default selectStyles;