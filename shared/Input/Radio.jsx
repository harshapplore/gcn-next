import { useEffect, useState } from "react";
import styled from "styled-components";

const RadioContainer = styled.div`
  padding: 5px;
  display: inline-block;
  font-weight: 400;

  .radio-button {
    width: 22px;
    height: 22px;
    border: 1px solid var(#ccc);
    border-radius: 50%;

    .active-button {
      background: var(--text);
      border-radius: 100%;
      height: 22px;
      width: 22px;
      transform: scale(0.65);
    }
  }
`;

const Radio = ({ text, value, setValue }) => {
  return (
    <RadioContainer>
      <div className="radio-button" onClick={() => setValue(!value)}>
        {value && <div className="active-button"> &nbsp; </div>}
      </div>
      {text && <div className="radio-text">{text}</div>}
    </RadioContainer>
  );
};

export default Radio;
