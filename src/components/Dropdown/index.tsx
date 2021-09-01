import { useState } from "react";
import "./dropdown.scss";

/**
 * Custom reusable select/dropdown component
 * @param {string[]} options string options for the dropdown
 *
 * @example
 *  <Dropdown
 *      options={["Option 1", "Option 2", "Option 3"]} />
 *
 */
const Dropdown = ({ options }: { options: string[] }): JSX.Element => {
  const placeholderText = "Select an Option";
  const [selected, setSelected] = useState(options[0] || placeholderText);
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => setShowOptions(!showOptions);
  const handleSelect = (option) => {
    setSelected(option);
    handleClick();
  };
  const handleKeyDown = (event, action, option = null) => {
    if (event.key === "Enter") {
      if (action === "click") handleClick();
      if (action === "select") handleSelect(option);
    }
  };

  return (
    <div className="wrapper">
      <div
        className="select"
        onClick={handleClick}
        onKeyDown={(event) => handleKeyDown(event, "click")}
        role="button"
        tabIndex={0}
      >
        <span className="selected">{selected}</span>
      </div>
      {showOptions && (
        <div className="options">
          {options.map((option) => (
            <option
              key={option}
              className="option"
              onClick={() => handleSelect(option)}
              onKeyDown={(event) => handleKeyDown(event, "select", option)}
              role="button"
              tabIndex={0}
            >
              {option}
            </option>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
