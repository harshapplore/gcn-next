import error from "@/slices/error";
import { useState } from "react";
import styled from "styled-components";

import CheckBox from "./Checkbox";

const DropdownContainer = styled.div`
  min-width: 300px;
  min-height: 25px;
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
  }

  .d-list-ctr {
    max-height: 200px;
    overflow-y: auto;
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
    }

    display: inline-block;
  }
`;

const DownIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={18}
      height={18}
      viewBox="0 0 172 172"
      style={{ fill: "#555" }}
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        strokeDasharray
        strokeDashoffset={0}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0,172v-172h172v172z" fill="none" />
        <g fill="var(--svg-fill)">
          <path d="M17.2,68.8v-11.46667c0,-2.21307 1.27853,-4.2312 3.27947,-5.18293c2.00093,-0.95173 4.3688,-0.65933 6.0888,0.74533l59.43173,48.63013l59.43747,-48.63013c1.71427,-1.40467 4.08213,-1.69133 6.0888,-0.74533c2.00667,0.946 3.27373,2.96987 3.27373,5.18293v11.46667c0,1.72 -0.774,3.34827 -2.10413,4.4376l-63.06667,51.6c-2.1156,1.72573 -5.14853,1.72573 -7.26413,0l-63.06667,-51.6c-1.3244,-1.08933 -2.0984,-2.7176 -2.0984,-4.4376z" />
        </g>
      </g>
    </svg>
  );
};

const CloseIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className=" cursor"
      onClick={onClick}
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0L24 0 24 24 0 24z"
                transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
              />
              <path
                fill="#635B57"
                fillRule="nonzero"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                transform="translate(-94.000000, -499.000000) translate(24.000000, 497.000000) translate(70.000000, 2.000000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const CheckDropdown = ({ choices, value, setValue, placeholder, width }) => {
  const [isOpen, setOpen] = useState(false);

  const updateValues = (status, choice) => {
    if (status) setValue([...value, choice]);

    if (!status) {
      const index = value.findIndex((val) => val === choice);
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    }
  };

  const toggleChoice = (choice) => {
    const index = value.findIndex(val => val === choice);

    if(index === -1){
      setValue([...value, choice]);
    }else{
      setValue([...value.slice(0, index), ...value.slice(index + 1)]);
    }
      
  }

  return (
    <DropdownContainer width={width}>
      <div className="d-choice" onClick={() => setOpen(!isOpen)}>
        {
          <span className="d-text">
            {`${placeholder} ${
              value.length ? ": " + value.length + " selected" : ""
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
              onClick={e => {
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
