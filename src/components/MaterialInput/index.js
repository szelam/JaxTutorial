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
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    border-color: ${(props) => props.focusBorderColor};
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translateY(-20px) scale(0.75);
    color: ${(props) => props.labelColor};
    background-color: white;
    padding: 0 4px;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 12px;
  font-size: 16px;
  color: ${(props) => props.color};
  pointer-events: none;
  transition: all 0.3s;
  transform-origin: top left;
`;

const MaterialInput = ({ label, placeholder, danger, ...props }) => {
  const [focused, setFocused] = useState(false);

  const DANGER_COLOR = "#d32f2f";
  const FOCUS_COLOR = "#1976d2";
  const DEFAULT_COLOR = "#ccc";

  const getBorderColor = () => {
    if (danger) return DANGER_COLOR;
    if (focused) return FOCUS_COLOR;
    return DEFAULT_COLOR;
  };

  const getLabelColor = () => {
    if (danger) return DANGER_COLOR;
    if (focused) return FOCUS_COLOR;
    return DEFAULT_COLOR;
  };

  return (
    <InputWrapper>
      <StyledInput
        placeholder={placeholder}
        borderColor={getBorderColor()}
        focusBorderColor={FOCUS_COLOR}
        labelColor={getLabelColor()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      <StyledLabel color={danger ? DANGER_COLOR : DEFAULT_COLOR}>
        {label}
      </StyledLabel>
    </InputWrapper>
  );
};

export default MaterialInput;
