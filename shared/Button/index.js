import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const ButtonComponent = styled.div`
  cursor: pointer;
  user-select: none;

  background: ${({ type }) => (type === "secondary" ? "#003c6e" : "#80a647")};
  color: #fff;

  display: inline-block;

  padding: 16px 22px;
  line-height: 24px;
  letter-spacing: 1.25px;

  border-radius: 5px;

  font-weight: 500;
  font-family: Rubik, sans-serif;

  text-transform: ${({ caps }) => (caps ? "uppercase" : "none")};

  &:hover {
    background: ${({ type }) => (type === "secondary" ? "#1a689e" : "#6c8c3c")};
  }

  &:active {
    transform: translate(0px, 3px);
  }
`;

const OutlinedButtonComponent = styled.div`
  cursor: pointer;
  user-select: none;

  background: #fff;
  color: ${({ type }) => (type === "secondary" ? "#003c6e" : "#80a647")};
  border: ${({ type }) =>
    type === "secondary" ? "2px solid #003c6e" : "2px solid #80a647"};

  display: inline-block;

  padding: 16px 22px;
  line-height: 24px;
  letter-spacing: 1.25px;

  border-radius: 5px;

  font-weight: 500;
  font-family: Rubik, sans-serif;

  text-transform: ${({ caps }) => (caps ? "uppercase" : "none")};

  &:hover {
    border: ${({ type }) =>
      type === "secondary" ? "1.5px solid #1a689e" : "1.5px solid #6c8c3c"};
  }

  &:active {
    transform: translate(0px, 3px);
  }
`;

export const Button = ({ name, action, type, caps, loading }) => {
  return (
    <>
      <ButtonComponent type={type} caps={caps} onClick={action}>
        {loading && (
          <span>
            <Loader type="Oval" color="#fff" height={24} width={24} />
          </span>
        )}
        <span>{name}</span>
      </ButtonComponent>
    </>
  );
};

export const OutlinedButton = ({ name, action, type, caps, loading }) => {
  return (
    <OutlinedButtonComponent type={type} caps={caps} onClick={action}>
      {loading && (
        <span>
          <Loader type="Oval" color="#fff" height={24} width={24} />
        </span>
      )}
      <span>{name}</span>
    </OutlinedButtonComponent>
  );
};

export default Button;
