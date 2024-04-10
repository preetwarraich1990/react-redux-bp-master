import * as React from 'react';
import styled from 'styled-components';

export interface CheckboxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  checked: boolean;
  onChange: () => void;
}

const SignUpFormCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding-left: 35px;
  padding-top: 3px;
  padding-bottom: 3px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    & ~ .checkmark {
      background-color: var(--input-checkbox-checkmark);
    }
    &:checked ~ .checkmark {
      background-color: var(--input-text-secondary-color);
    }
    &:checked ~ .checkmark:after {
      display: block;
    }
  }
  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--input-checkbox-bg);

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid var(--main-text-color);
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, children, onChange }) => {
  const onToggleCheck = () => {
    if (onChange) {
      onChange();
    }
  };
  return (
    <SignUpFormCheckboxContainer onClick={onToggleCheck}>
      <input type="checkbox" checked={checked} />
      <span className="checkmark"></span>
      {children}
    </SignUpFormCheckboxContainer>
  );
};

export default Checkbox;
