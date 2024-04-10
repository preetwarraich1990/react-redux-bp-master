import Divider from '../Divider';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from '../svg/HeaderLogo';
import TwIcon from '../svg/TwIcon';
import LnIcon from '../svg/LnIcon';
import FbIcon from '../svg/FbIcon';
import InstaIcon from '../svg/InstaIcon';
import TwitchIcon from '../svg/TwitchIcon';


const StyledFooterOuter = styled.div`
  margin-top: auto;
  filter: drop-shadow(0px -4px 30px rgba(217, 8, 22, 0.8));
`;
const StyledFooterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  /*height: 430px;*/
  padding-top: 50px;
  clip-path: polygon(3% 0%, 97% 0%, 100% 12%, 100% 100%, 0 100%, 0 10%);
  background: #000;

  & > svg {
    position: absolute;
    top: 0;
    left: -20px;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
`;
const StyledFooterMenuContainer = styled.div`
  padding: 30px 100px;
  position: relative;
  z-index: 500;
  max-width: 1039px;
  margin: 0 auto;
  width: 100%;
`;
const StyledLogoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledMenuContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 200;
`;
const StyledLeftMenuContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const StyledMenuItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;
const StyledMenuItemSeparator = styled.div`
  height: 26px;
  width: 2px;
  border: 1px solid rgba(147, 26, 26, 1);
  align-items: center;
`;
const StyledH2 = styled.h2`
  text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.8);
  font-family: "Orbitron";
  font-size: 14px;
  font-weight: 900;
  color: rgba(255, 255, 255, 1) !important;
`;
const StyledRightMenuContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
`;
const StyledFooterBottomContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledSocialIconsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  z-index: 500;
`;
const StyledCopyRightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
`;
const StyledDividerContainer = styled.div`
padding: 0 10px;
max-width: 1039px;
margin: 0 auto;
width: 100%;
`;
const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background: none;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooterOuter>
      <StyledFooterContainer>
        <StyledFooterMenuContainer>
          <StyledMenuContainer>
            <StyledLeftMenuContainer>
              <StyledNavLink to="/">
                <StyledMenuItemContainer>
                  <StyledH2>DISCOVER</StyledH2>
                </StyledMenuItemContainer>
              </StyledNavLink>
              <StyledNavLink to="/">
                <StyledMenuItemContainer>
                  <StyledH2>LEADERBOARD</StyledH2>
                </StyledMenuItemContainer>
              </StyledNavLink>
            </StyledLeftMenuContainer>
            <StyledLogoContainer>
              <HeaderLogo />
            </StyledLogoContainer>
            <StyledRightMenuContainer>
              <StyledNavLink to="/">
                <StyledMenuItemContainer>
                  <StyledH2>PRICING</StyledH2>
                </StyledMenuItemContainer>
              </StyledNavLink>
              <StyledNavLink to="/">
                <StyledMenuItemContainer>
                  <StyledH2>SUPPORT</StyledH2>
                </StyledMenuItemContainer>
              </StyledNavLink>
            </StyledRightMenuContainer>
          </StyledMenuContainer>
        </StyledFooterMenuContainer>
        <StyledDividerContainer>
          <Divider lineColor="rgba(192, 8, 20, 1)" />
        </StyledDividerContainer>
        <StyledFooterBottomContainer>
          <StyledSocialIconsContainer>
            <StyledIconButton>
              <TwIcon />
            </StyledIconButton>
            <StyledIconButton>
              <LnIcon />
            </StyledIconButton>
            <StyledIconButton>
              <FbIcon />
            </StyledIconButton>
            <StyledIconButton>
              <InstaIcon />
            </StyledIconButton>
            <StyledIconButton>
              <TwitchIcon />
            </StyledIconButton>
          </StyledSocialIconsContainer>
          <StyledCopyRightContainer>
            <StyledMenuContainer>
              <StyledLeftMenuContainer>
                <StyledNavLink to="/">
                  <StyledMenuItemContainer>
                    <StyledH2>&copy; HAIKU PRO 2022</StyledH2>
                  </StyledMenuItemContainer>
                </StyledNavLink>
                <StyledMenuItemSeparator />
                <StyledNavLink to="/">
                  <StyledMenuItemContainer>
                    <StyledH2>PRIVACY</StyledH2>
                  </StyledMenuItemContainer>
                </StyledNavLink>
                <StyledMenuItemSeparator />
                <StyledNavLink to="/">
                  <StyledMenuItemContainer>
                    <StyledH2>TERMS</StyledH2>
                  </StyledMenuItemContainer>
                </StyledNavLink>
              </StyledLeftMenuContainer>
            </StyledMenuContainer>
          </StyledCopyRightContainer>
        </StyledFooterBottomContainer>
      </StyledFooterContainer>
    </StyledFooterOuter>
  );
};

export default Footer;
