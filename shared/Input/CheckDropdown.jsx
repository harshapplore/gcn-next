import error from "@/slices/error";
import { useState } from "react";
import styled from "styled-components";

import CheckBox from "./Checkbox";

import { useCloseMe } from "@/_hooks";
import { DownIcon, CloseIcon } from "@/assets/icons";

const DropdownContainer = styled.div`
  flex-basis: auto;
  flex-grow: 1;

  min-height: 25px;
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
    gap: 20px;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.35);

    .d-text {
      display: inline-block;
    }
  }

  .d-list-ctr {
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    cursor: pointer;

    position: absolute;
    z-index: 99;
    background: #fff;
    width: 100%;

    .d-list-item {
      padding: 11.5px;
      border-inline: 0.25px solid #eee;
      border-bottom: 0.5px solid #eee;
      width: 100%;

      > * {
        margin-bottom: 0;
      }

    }

    display: inline-block;
  }
`;

const CheckDropdown = ({ choices, value, setValue, placeholder, width }) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useCloseMe(() => setOpen(false));

  const updateValues = (status, choice) => {
    if (status) setValue([...value, choice]);

    if (!status) {
      const index = value.findIndex((val) => val === choice);
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    }
  };

  const toggleChoice = (choice) => {
    const index = value.findIndex((val) => val === choice);

    if (index === -1) {
      setValue([...value, choice]);
    } else {
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    }
  };

  return (
    <DropdownContainer width={width} ref={ref}>
      <div className="d-choice" onClick={() => setOpen(!isOpen)}>
        {
          <span className="d-text">
            {`${placeholder} ${
              value.length ? ": " + value.length + "" : ""
            }` || "Select Values"}
          </span>
        }
        {value.length === 0 ? (
          <DownIcon />
        ) : (
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              setValue([]);
              setOpen(false);
            }}
          />
        )}
      </div>
      {isOpen && (
        <div className="d-list-ctr">
          {choices.map((choice, index) => (
            <div
              key={"choice" + index}
              className="d-list-item"
              onClick={(e) => {
                e.stopPropagation();
                toggleChoice(choice);
              }}
            >
              <CheckBox
                text={choice}
                key={choice + index}
                value={value.includes(choice)}
                setValue={() => toggleChoice(choice)}
              />
            </div>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
};

export default CheckDropdown;
