/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled, { css } from 'styled-components';

interface TextInputLabelProps {
  value: string;
  hasFocus: boolean;
}

export interface TextInputProps {
  className?: string;
  value: string;
  type?: string;
  onChange: (text: string, e?: React.ChangeEvent) => void;
  onRightIconClick?: () => void;
  rightIcon?: any;
  isRequired?: boolean;
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
  showPassword?: boolean;
}

const ANIMATION_DURATION = 0.4;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 40px;
  border: 1px solid var(--main-bg-color);
  background-color: var(--input-text-bg);
`;
const InputLabel = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  left: 10px;
  position: absolute;
  top: 8px;
  bottom: 0;
  transition: all ${ANIMATION_DURATION}s;
  width: 100%;
  color: #aaa;

  ${(props: TextInputLabelProps) =>
    (props.hasFocus || props.value) &&
    css`
      font-size: 0.6rem;
      transform: translateY(-16px);
    `}
`;
const InputWrapper = styled.div`
  display: flex;
  z-index: 200;
  width: 100%;
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex: 9;
`;
const StyledInput = styled.input`
  padding: 10px;
  color: var(--main-text-color);
  font-size: 14px;
  width: 100%;
  font-family: "Orbitron", sans-serif;
  background: none;
  border: none;
`;
const RightIconContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const RightIconButton = styled.button`
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const RequiredLabel = styled.span`
  color: red;
  padding: 0 10px;
`;
const ErrorContainer = styled.div`
  color: red;
`;

const TextInput: React.FC<TextInputProps> = ({
  className = '',
  type = 'text',
  value,
  onChange,
  onRightIconClick,
  rightIcon: RightIcon = '',
  isRequired = false,
  label = '',
  hasError = false,
  errorMessage = '',
  showPassword = false,
}) => {
  const [hasInputFocus, setFocus] = React.useState<boolean>(false);

  const handleRightIconClick = () => {
    if (onRightIconClick) {
      onRightIconClick();
    }
  };

  return (
    <InputContainer className={className}>
      {label ? (
        <InputLabel value={value} hasFocus={hasInputFocus}>
          {label} {isRequired ? <RequiredLabel /> : null}
        </InputLabel>
      ) : null}
      <InputWrapper>
        <StyledInputContainer>
          <StyledInput
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            value={value}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => onChange(e.target.value, e)}
          />
        </StyledInputContainer>
        {RightIcon ? (
          <RightIconContainer>
            <RightIconButton onClick={handleRightIconClick}>
              <RightIcon />
            </RightIconButton>
          </RightIconContainer>
        ) : null}
      </InputWrapper>
      {hasError ? <ErrorContainer>{errorMessage}</ErrorContainer> : null}
    </InputContainer>
  );
};

export default TextInput;
