import React from "react";
import { ButtonProps } from "./Button.types.ts";
import styled from "styled-components";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type = {props.type}
      disabled = {props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;