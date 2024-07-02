import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid
    ${(props) =>
      props.danger ? "#d32f2f" : props.focused ? "#1976d2" : "#ccc"};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: #1976d2;
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translateY(-20px) scale(0.75);
    color: ${(props) =>
      props.danger ? "#d32f2f" : props.focused ? "#1976d2" : "#ccc"};
    background-color: white;
    padding: 0 4px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 12px;
  font-size: 16px;
  color: ${(props) => (props.danger ? "#d32f2f" : "#ccc")};
  pointer-events: none;
  transition: all 0.3s;
  transform-origin: top left;
`;

const MaterialInput = ({ label, placeholder, danger, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeholder}
        danger={danger}
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      <StyledLabel danger={danger}>{label}</StyledLabel>
    </InputWrapper>
  );
};

export default MaterialInput;
