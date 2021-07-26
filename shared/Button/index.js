import React from "react";
import styled from "styled-components";
import styles from "./button.module.scss";

const ButtonComponent = styled.div`
  cursor: pointer;
  
  background: ${({type}) => (type === 'secondary')? "#003c6e"  : "#80a647"};
  color: #fff;
  
  display: inline-block;
  
  padding: 16px 22px;
  line-height: 24px;
  letter-spacing: 1.25px;
  
  border-radius: 5px;

  font-weight: 500;
  font-family: Rubik, sans-serif;

  text-transform: ${({caps}) =>  caps? 'uppercase': 'none'};

  &:hover{
  background: ${({type}) => (type === 'secondary')? "#1a689e"  : "#6c8c3c"};
  }

  &:active{
    transform: translate(0px, 3px);
  }
`;

export const Button = ({ name, action, type, caps }) => {
  return (
    <>
      <ButtonComponent type={type} caps={caps} > {name} </ButtonComponent>
    </>
  );
};

export default Button;
