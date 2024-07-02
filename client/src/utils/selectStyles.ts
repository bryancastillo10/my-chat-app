import { HobbyOption } from "./fetchHobbyOptions";
import { StylesConfig } from "react-select";

const selectStyles: StylesConfig<HobbyOption, true, never> = {
  control: (originalStyle, state) => ({
    ...originalStyle,
    backgroundColor: "#1e293b",
    borderColor: state.isFocused ? "#10b981" : "#1e293b",
    boxShadow: state.isFocused ? "0 0 0 1px #10b981" : "none",
    "&:hover": {
      borderColor: state.isFocused ? "#10b981" : "#1e293b",
    },
    minHeight: "30px",
    borderRadius: "10px",
  }),
  option: (originalStyle, state) => ({
    ...originalStyle,
    backgroundColor: state.isSelected
      ? "#f59e0b"
      : state.isFocused
      ? "#10b981"
      : "#111000",
    color: state.isSelected ? "#F4F3F2" : "#F4F3F2",
    boxShadow: state.isFocused ? "0 0 0 1px #10b981" : "none",
    "&:focus": {
      borderColor: "#10b981",
      boxShadow: "0 0 0 1px #10b981",
    },
  }),
  multiValue: (originalStyle) => ({
    ...originalStyle,
    backgroundColor: "#e9ecef",
  }),
  multiValueLabel: (originalStyle) => ({
    ...originalStyle,
    color: "#F4F3F2",
    backgroundColor: "#f59e0b",
  }),
  multiValueRemove: (originalStyle) => ({
    ...originalStyle,
    color: "#111000",
    ":hover": {
      backgroundColor: "#f43f5e",
      color: "#F4F3F2",
    },
  }),
};

export default selectStyles;
