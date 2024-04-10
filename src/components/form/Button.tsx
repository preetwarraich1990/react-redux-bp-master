/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonBgInterface {
  height?: number;
  width?: number;
  activeColor?: string;
  isActive?: boolean;
}

export interface ButtonPropsInterface {
  icon?: any;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  height?: number;
  width?: number;
  as?: 'button' | 'navlink';
  to?: string;
  className?: string;
  activeColor?: string;
  isActive?: boolean;
}

export interface ButtonLabelProps {
  icon?: any;
}

const StyledButton = styled.button`
  height: ${(props: ButtonBgInterface) => props.height || 64}px;
  width: ${(props: ButtonBgInterface) => props.width || 332}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  box-shadow: none;
  cursor: pointer;
  clip-path: polygon(100% 5%, 100% 56%, 92% 100%, 0% 100%, 0 54%, 8% 5%);
  background: ${(props) => props.activeColor};
`;

const StyledNavLink = styled(NavLink)`
  height: ${(props: ButtonBgInterface) => props.height || 64}px;
  width: ${(props: ButtonBgInterface) => props.width || 332}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
  border: none;
  box-shadow: none;
  cursor: pointer;
  clip-path: polygon(100% 5%, 100% 56%, 92% 100%, 0% 100%, 0 54%, 8% 5%);
  background: ${(props) => props.activeColor};
  color: #fff !important;
`;

const StyledButtonContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 200;
  flex: 1;
`;

const StyledIconContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-end;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex: 8;
  text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.8);
  font-weight: bold;
  ${(props: ButtonLabelProps) =>
    props.icon
      ? css`
          justify-content: center;
        `
      : css`
          justify-content: center;
        `}
  margin-left: 5px;
`;

const Button: React.FC<ButtonPropsInterface> = ({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  width = 332,
  height = 64,
  as = 'button',
  to = '/',
  className = '',
  isActive = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const buttonContent = (
    <StyledButtonContentContainer>
      {Icon ? (
        <StyledIconContainer>
          <Icon />
        </StyledIconContainer>
      ) : null}
      <StyledLabelContainer icon={Icon}>{label}</StyledLabelContainer>
    </StyledButtonContentContainer>
  );
  const classes = [className, disabled ? 'button-disabled' : ''];
  const activeColor = isActive
    ? 'rgba(147, 31, 28, 0.5)'
    : 'rgba(147, 31, 28, 1)';
  return as === 'button' ? (
    <StyledButton
      className={classes.join(' ')}
      disabled={disabled}
      onClick={handleClick}
      height={height}
      width={width}
      activeColor={activeColor}
    >
      {buttonContent}
    </StyledButton>
  ) : (
    <StyledNavLink
      to={to}
      className={classes.join(' ')}
      onClick={handleClick}
      height={height}
      width={width}
      activeColor={activeColor}
    >
      {buttonContent}
    </StyledNavLink>
  );
};

export default Button;
