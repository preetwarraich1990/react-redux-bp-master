import * as React from 'react';
import styled from 'styled-components';

export interface IconButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const StyledIconContainer = styled.button`
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  background: none;
  border-radius: 50%;
  cursor: pointer;
`;

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <StyledIconContainer>{children}</StyledIconContainer>;
};

export default IconButton;
