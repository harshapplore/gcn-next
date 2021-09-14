import { useState } from "react";
import styled from "styled-components";

import { useCloseMe } from "@/_hooks";

import { DownIcon, CloseIcon } from "@/assets/icons";

const DropdownContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;

  min-height: 25px;
  min-width: max-content;
  max-width: 250px;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: #555;
  --svg-fill: #555;

  position: relative;

  .d-choice {
    border: 2px solid #5e5855ba;
    border-radius: 5px;
    padding: 12px;
    text-align: left;
    cursor: default;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.35);

    .d-icon {
      vertical-align: middle;
    }
  }

  .d-list-ctr {
    max-height: 200px;
    overflow-y: auto;
    cursor: pointer;
    width: 100%;

    position: absolute;
    z-index: 99;
    background: #fff;

    .d-list-item {
      height: 46px;
      padding: 11.5px;
      border-inline: 0.25px solid #eee;
      border-bottom: 0.5px solid #eee;
    }
  }
`;

const Dropdown = ({ choices, value, setValue, placeholder, width }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useCloseMe(() => setOpen(false));

  const update = (index) => {
    setValue(choices[index]);
    setOpen(false);
  };

  return (
    <DropdownContainer width={width} ref={ref}>
      <span>
        <div className="d-choice" onClick={() => setOpen(!isOpen)}>
          <span className="d-text">
            {value ? value : placeholder || "Select One"}
          </span>

          {!value ? (
            <DownIcon />
          ) : (
            <CloseIcon
              onClick={(e) => {
                e.stopPropagation();
                setValue(null);
              }}
            />
          )}
        </div>
        {isOpen && (
          <div className="d-list-ctr">
            {choices.map((choice, index) => (
              <div
                key={choice + index}
                className="d-list-item"
                onClick={(e) => {
                  e.stopPropagation();
                  update(index);
                }}
              >
                {choice}
              </div>
            ))}
          </div>
        )}
      </span>
    </DropdownContainer>
  );
};

export default Dropdown;
