import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const firstColor = 'rgba(192, 8, 20,1)';
const lastColor = 'rgba(192, 8, 20, 0.4)';

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  width: 463px;
  height: 76px;
  clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);
  border-top: 1px solid rgba(222, 19, 19, 1);
  border-right: 1px solid rgba(222, 19, 19, 1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 10px;
    left: 10px;
    right: 10px;
    /* background-image: -webkit-linear-gradient(
      135deg,
      ${firstColor} 0%,
      ${lastColor} 75%
    );
    background-image: -moz-linear-gradient(
      135deg,
      ${firstColor} 0%,
      ${lastColor} 75%
    );
    background-image: -o-linear-gradient(
      135deg,
      ${firstColor} 0%,
      ${lastColor} 75%
    );
    background-image: linear-gradient(
      135deg,
      ${firstColor} 0%,
      ${lastColor} 75%
    ); */
    /* ff 3.6+ */
    background: -moz-linear-gradient(
      110deg,
      rgba(192, 8, 20, 1) 20%,
      rgba(192, 8, 20, 0.9) 28%,
      rgba(192, 8, 20, 0.39) 44%,
      rgba(192, 8, 20, 0.2) 52%
    );

    /* safari 5.1+,chrome 10+ */
    background: -webkit-linear-gradient(
      110deg,
      rgba(192, 8, 20, 1) 20%,
      rgba(192, 8, 20, 0.9) 28%,
      rgba(192, 8, 20, 0.39) 44%,
      rgba(192, 8, 20, 0.2) 52%
    );

    /* opera 11.10+ */
    background: -o-linear-gradient(
      110deg,
      rgba(192, 8, 20, 1) 20%,
      rgba(192, 8, 20, 0.9) 28%,
      rgba(192, 8, 20, 0.39) 44%,
      rgba(192, 8, 20, 0.2) 52%
    );

    /* ie 10+ */
    background: -ms-linear-gradient(
      110deg,
      rgba(192, 8, 20, 1) 20%,
      rgba(192, 8, 20, 0.9) 28%,
      rgba(192, 8, 20, 0.39) 44%,
      rgba(192, 8, 20, 0.2) 52%
    );

    /* global 94%+ browsers support */
    background: linear-gradient(
      110deg,
      rgba(192, 8, 20, 1) 20%,
      rgba(192, 8, 20, 0.9) 28%,
      rgba(192, 8, 20, 0.39) 44%,
      rgba(192, 8, 20, 0.2) 52%
    );
  }
`;
const StyledTabsContainer = styled.div`
  display: flex;
  flex: 9;
  flex-direction: row;
  z-index: 1000;
`;
const StyledTabItem = styled(NavLink)`
  display: flex;
  flex: 4;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  height: 75px;
  color: var(--main-text-disabled-color);
  border-bottom: 1px solid var(--main-text-disabled-color);
  font-size: 24px;
  font-weight: bold;

  &.active {
    color: var(--main-text-color);
    border-bottom: 1px solid var(--main-text-primary-color);
  }
`;

const PageHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledContainer>
      <StyledTabsContainer>
        <StyledTabItem

          to="/setpassword"> Create Password </StyledTabItem>
      </StyledTabsContainer>
    </StyledContainer>
  );
};

export default PageHeader;
