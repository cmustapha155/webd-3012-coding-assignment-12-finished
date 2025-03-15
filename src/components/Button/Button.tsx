import React from "react";
import { ButtonProps } from "./Button.types.ts";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  font-size: 1em;
  font-family: sans-serif;
  padding: 10px 35px 10px 35px;

  background-color: white;
  border: 1.5px solid lightgrey;
  border-radius: 3px;

  transition: 200ms;

  &:hover {
    background-color: ${(props) => !props.disabled && (props.hoverBackgroundColor || "#3284ad")};
    border: 1.5px solid ${(props) => !props.disabled && (props.hoverBackgroundColor || "#3284ad")};
    color: ${(props) => !props.disabled && "white"};
    cursor: ${(props) => !props.disabled && "pointer"};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      className = {props.className}
      id = {props.id}
      type = {props.type}
      onClick = {props.onClick}
      disabled = {props.disabled}
      hoverBackgroundColor = {props.hoverBackgroundColor}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;