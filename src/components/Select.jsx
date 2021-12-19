import Select from "react-select";
import { useNavigate } from "react-router-dom";

const optionStyles = {
  control: (styles) => ({
    ...styles,
    cursor: "pointer",
    width: "120px",
    padding: "0",
    margin: "0",
    opacity: "0",
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "#6768AB" : undefined,
    color: isFocused ? "white" : "#202020",
    textAlign: "center",
    letterSpacing: "2.5px",
    border: isFocused ? "0.5px solid black" : undefined,
    cursor: "pointer",
    padding: "8px 20px",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "0",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: "0",
  }),
};

function Select_Custom({ options, school }) {
  const navigate = useNavigate();

  const _selectOption = (option) => {
    navigate(`/${school}/${option.value}`);
  };

  return (
    <Select options={options} styles={optionStyles} onChange={_selectOption} />
  );
}

export default Select_Custom;
