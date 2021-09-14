import { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  min-height: 25px;
  min-width: max-content;
  width: ${(props) => (props.width ? props.width : "auto")};
  color: #555;
  --svg-fill: #555;

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

  position: relative;

  .d-list-ctr {
    max-height: 200px;
    overflow-y: auto;
    cursor: pointer;

    background: #fff;
    position: absolute;
    z-index: 99;

    .d-list-item {
      padding: 11.5px;
      border-inline: 0.25px solid #eee;
      border-bottom: 0.5px solid #eee;
    }
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
      style={{ fill: "#000000" }}
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
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

const Dropdown = ({ choices, value, setValue, placeholder, width }) => {
  const [isOpen, setOpen] = useState(false);

  const update = (index) => {
    setValue(choices[index]);
    setOpen(false);
  };

  return (
    <DropdownContainer width={width}>
      <div className="d-choice" onClick={() => setOpen(!isOpen)}>
        <span className="d-text">
          {value ? value : placeholder || "Select One"}
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
