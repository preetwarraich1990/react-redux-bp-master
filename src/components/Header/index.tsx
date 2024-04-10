import Button from '../form/Button';
import HeaderBg from '../svg/HeaderBg';
import HeaderLogo from '../svg/HeaderLogo';
import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hoc/AuthProvider';
import { persitor } from '../..';
import { useActions } from '../../hooks/hooks';
import { boolean } from 'yup/lib/locale';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { isAuthenticated } = useAuth();
  const { logout } = useActions();
  const [showDropdown,setShowDropdown] = React.useState<boolean>(false)

  const handleLogoutClick = () => {
    persitor.purge();
    logout();
    navigate('/');
  };
  const handleNavClick = (route: string) => {
    navigate(route);
  };
  return (
    <StyledContainer>
      <HeaderBg />
      <StyledHeaderContainer>
        <StyledLogoContainer>
          <HeaderLogo />
        </StyledLogoContainer>
        <StyledMenuContainer>
          <StyledLeftMenuContainer>
            <StyledNavLink to='discover'>
              <StyledMenuItemContainer>
                <StyledH2>DISCOVER</StyledH2>
              </StyledMenuItemContainer>
            </StyledNavLink>
            <StyledMenuItemSeparator />
            <StyledNavLink to='/'>
              <StyledMenuItemContainer>
                <StyledH2>LEADERBOARD</StyledH2>
              </StyledMenuItemContainer>
            </StyledNavLink>
            <StyledMenuItemSeparator />
            <StyledNavLink to='/pricing'>
              <StyledMenuItemContainer>
                <StyledH2>PRICING</StyledH2>
              </StyledMenuItemContainer>
            </StyledNavLink>
          </StyledLeftMenuContainer>
          {isAuthenticated ? (
          <StyledUserLoginOut onClick={() => {
            setShowDropdown(!showDropdown)
          }}>
            <svg
              width='49'
              height='49'
              viewBox='0 0 49 49'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.02539 3.20206V0.813507H3.41394'
                stroke='#C00814'
                stroke-width='0.335347'
              />
              <path
                d='M3.4139 48.1864L1.02535 48.1864L1.02535 45.7979'
                stroke='#C00814'
                stroke-width='0.335347'
              />
              <path
                d='M45.6117 0.81349L48.0002 0.81349V3.20204'
                stroke='#C00814'
                stroke-width='0.335347'
              />
              <path
                d='M47.6021 45.7979L47.6021 48.1864L45.2135 48.1864'
                stroke='#C00814'
                stroke-width='0.335347'
              />
            </svg>
            <img src='/assets/images/pic-placeholder.png' alt="user" />
            {showDropdown && 
            <ul>
              <li> <Link to='/setting'>Account Settings </Link> </li>
              <li onClick={handleLogoutClick}>Logout</li>
            </ul>}
          </StyledUserLoginOut>) : (
            <StyledRightMenuContainer>
              <Button
                isActive={!currentPath.includes('login')}
                height={40}
                width={140}
                label='Login'
                onClick={handleNavClick.bind(null, 'login')}
              />
              <StyledSeparatorContainer />
              <Button
                isActive={!currentPath.includes('signup')}
                height={40}
                width={140}
                label='Sign Up'
                onClick={handleNavClick.bind(null, 'signup')}
              />
            </StyledRightMenuContainer>
          )}
        </StyledMenuContainer>
      </StyledHeaderContainer>
      <StyledHeaderBottomContainer>
        <StyledLogoBottomBorderContainer>
          <StyledTriangleTopLeft />
        </StyledLogoBottomBorderContainer>
        <StyledMenuBottomBorderContainer />
      </StyledHeaderBottomContainer>
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled.div`
  padding: 0 50px;
  position: relative;
  background: rgb(18, 18, 18);

  & > svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: none;
  }
`;
const StyledHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 64px;
`;
const StyledLogoContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  align-items: flex-end;
  z-index: 500;
  position: relative;
`;
const StyledMenuContainer = styled.div`
  display: flex;
  flex: 7;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 200;
`;
const StyledLeftMenuContainer = styled.div`
  display: flex;
  flex: 7;
  flex-direction: row;
  align-items: center;
`;
const StyledMenuItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;
const StyledMenuItemSeparator = styled.div`
  height: 26px;
  width: 2px;
  border: 1px solid rgba(147, 26, 26, 1);
  -webkit-transform: rotate(35deg);
  -ms-transform: rotate(35deg);
  transform: rotate(35deg);
  align-items: center;
  margin: 0 15px;
`;
const StyledH1 = styled.h1`
  font-size: 40px;
  color: rgba(255, 255, 255, 1) !important;
`;
const StyledH2 = styled.h2`
  text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.8);
  font-family: 'Orbitron';
  font-size: 18px;
  font-weight: 900;
  color: rgba(255, 255, 255, 1) !important;
`;
const StyledRightMenuContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const StyledUserLoginOut = styled.div`
  width: 47px;
  height: 47px;
  padding: 2px;
  position: relative;
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    border: 1px solid #de1313;
    border-bottom: none;
    position: absolute;
    right: 0;
    top: 65px;
    background: radial-gradient(
      375.06% 353.28% at 24.43% -4.92%,
      #931a1a 7.47%,
      rgba(147, 26, 26, 0.655121) 38.96%,
      rgba(147, 26, 26, 0) 93.55%
    );
    li {
      border-bottom: 1px solid #de1313;
      padding: 7px 10px;
      white-space: nowrap;
      text-align: center;
      cursor:pointer;
      a{
        color:#fff !important;
      }
    }
  }
`;
const StyledNavLink = styled(Link)``;

const StyledHeaderBottomContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
`;
const StyledLogoBottomBorderContainer = styled.div`
  display: flex;
  flex: 2;
  height: 20px;
  background-color: rgb(18, 18, 18);
  position: relative;
  bottom: -10px;
`;
const StyledTriangleTopLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid rgb(18, 18, 18);
  border-right: 20px solid transparent;

  position: absolute;
  right: -20px;
  top: 0;
  bottom: 0;
  z-index: 500;
`;
const StyledMenuBottomBorderContainer = styled.div`
  display: flex;
  flex: 7;
  height: 10px;
  background-color: rgba(135, 8, 16, 0.7);
  border: 1px solid rgba(135, 8, 16, 1);
  position: relative;
  bottom: -10px;
`;
const StyledSeparatorContainer = styled.div`
  display: flex;
  margin: 0 8px;
`;
