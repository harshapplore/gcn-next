import { useState, useEffect } from "react";
import styled from "styled-components";

const NumberInputContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;

    user-select: none;
    overflow: hidden;

    margin-inline: 10px;

    span {
      cursor: pointer;
      display: inline-block;
      text-align: center;
      padding: 10px;

      border: 2px solid var(--primary);
      color: var(--primary);
      font-weight: 700;
      border-radius: 2.5px;
    }

    input {
      border: 0;
      outline: 0;
      width: 50px;
      height: 35px;
      text-align: center;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
`;

export const NumberInput = ({ value, setValue, limit }) => {
  useEffect(() => {
    if (value <= 0) setValue(1);

    if (limit && value > limit) setValue(limit);
  }, [value]);

  return (
    <NumberInputContainer>
      <span onClick={() => setValue(parseInt(value) - 1)}> - </span>
      <input
        type="number"
        value={value}
        max={limit}
        onChange={(e) => setValue(e.target.value)}
      />
      <span onClick={() => setValue(parseInt(value) + 1)}> + </span>
    </NumberInputContainer>
  );
};

export default NumberInput;