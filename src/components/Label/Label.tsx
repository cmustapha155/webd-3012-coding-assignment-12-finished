import React from "react";
import { LabelProps } from "./Label.types.ts";
import styled from "styled-components";

const StyledLabel = styled.label<LabelProps>`
  font-size: 1em;
  font-family: sans-serif;
  color: #4c5172;
  padding: 10px 10px 10px 10px;
`;

const Label: React.FC<LabelProps> = (props) => {
  return (
    <StyledLabel
      className = {props.className}
      id = {props.id}
      for = {props.for}
      disabled = {props.disabled}
    >
      {props.text}
    </StyledLabel>
  )
}

export default Label;