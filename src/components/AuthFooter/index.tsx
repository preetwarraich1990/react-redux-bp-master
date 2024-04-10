import Checkbox from '../form/Checkbox';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StyledForgotContainer = styled(NavLink)`
  color: #ffffff;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 14px;
  margin-top: 20px;
  font-weight: bold;
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthFooterProps {}

const AuthFooter: React.FC<AuthFooterProps> = () => {
  const [isRemember, setIsRemember] = React.useState(false);
  return (
    <StyledContainer>
      <StyledCheckboxContainer>
        <Checkbox
          checked={isRemember}
          onChange={() => setIsRemember(!isRemember)}
        >
          Remember my password
        </Checkbox>
      </StyledCheckboxContainer>
      <StyledForgotContainer to="/">FORGOT PASSWORD?</StyledForgotContainer>
    </StyledContainer>
  );
};

export default AuthFooter;
