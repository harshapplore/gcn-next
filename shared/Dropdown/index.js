import { useState } from "react";
import styled from "styled-components";

import { DownIcon, CloseIcon } from "@/assets/icons";

const DropdownContainer = styled.div`
  min-height: 25px;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: #555;
  --svg-fill: #555;

  .d-choice {
    border: 1px solid #e5e5e5;
    padding: 12px;
    text-align: left;
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.35);
  }

  .d-list-ctr {
    max-height: 200px;
    overflow-y: auto;
    cursor: pointer;

    .d-list-item {
      padding: 11.5px;
      border-inline: 0.25px solid #eee;
      border-bottom: 0.5px solid #eee;
    }
  }
`;

const Dropdown = ({ choices, value, setValue, defaultValue, width }) => {
  const [isOpen, setOpen] = useState(false);

  const update = (index) => {
    setValue(choices[index]);
    setOpen(false);
  };

  return (
    <DropdownContainer width={width}>
      <div className="d-choice" onClick={() => setOpen(!isOpen)}>
        <span className="d-text">
          {value ? value : defaultValue || "Select One"}
        </span>
        <span className="d-icon">
          <DownIcon />
        </span>
      </div>
      {isOpen && (
        <div className="d-list-ctr">
          {choices.map((choice, index) => (
            <div
              key={choice + index}
              className="d-list-item"
              onClick={() => update(index)}
            >
              {choice}
            </div>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
