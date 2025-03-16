import React from "react";
import { LabelProps } from "./Label.types.ts";
import styled from "styled-components";

const StyledLabel = styled.label<LabelProps>`
  font-size: 1em;
  font-family: sans-serif;
  color: ${(props) => props.disabled ? "lightgrey" : props.textColor || "#3284ad"};
  padding: 10px 10px 10px 10px;
`;

const Label: React.FC<LabelProps> = (props) => {
  return (
    <StyledLabel
      className = {props.className}
      id = {props.id}
      htmlFor = {props.htmlFor}
      disabled = {props.disabled}
      textColor = {props.textColor}
    >
      {props.text}
    </StyledLabel>
  )
}

export default Label;