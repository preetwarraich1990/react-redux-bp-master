import * as React from 'react'
import styled from 'styled-components'
import FacebookOutline from './FacebookOutline'
import LinkedinOutline from './LinkedInOutline'
import TwitterOutline from './TwitterOutline'

const MediaContainer = styled.div``

const MediaDiv = styled.div`
  position: fixed;
  top: 200px;
  left: -1px;
  z-index: 99;
  padding: 40px 5px;
  border: 1px solid rgba(222, 19, 19, 1);
  max-width: 68px;
  width: 100%;
  clip-path: polygon(55% 0, 100% 12%, 100% 88%, 55% 100%, 0 100%, 0 0);
  background: linear-gradient(
    to bottom,
    rgba(127, 6, 8, 0.7) 0%,
    rgba(192, 8, 20, 0.5) 50%,
    rgba(127, 6, 8, 0.7) 100%
  );
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    background: red;
    right: 14px;
    height: 49px;
    transform: rotate(-37deg);
    top: -5px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    background: red;
    right: 14px;
    height: 48px;
    transform: rotate(37deg);
    bottom: -5px;
  }
`

const MediaContent = styled.div`
  font-size: 10px;
  margin-bottom: 8px;
  text-align: center;
  text-transform: uppercase;
`

const StyledFormUl = styled.ul`
  padding-left: 0px;
`

const StyledFormLi = styled.li`
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
`

const StyledCount = styled.div`
  font-size: 10px;
  font-weight: 700;
  margin: 3px 0 5px 0;
`

const MediaWrapper: React.FC = () => {
  return (
    <MediaContainer>
      <MediaDiv>
        <MediaContent>Share</MediaContent>
        <StyledFormUl>
          <StyledFormLi>
            <LinkedinOutline />
            <StyledCount>14</StyledCount>
          </StyledFormLi>
          <StyledFormLi>
            <FacebookOutline />
            <StyledCount>14</StyledCount>
          </StyledFormLi>
          <StyledFormLi>
            <TwitterOutline />
            <StyledCount>14</StyledCount>
          </StyledFormLi>
        </StyledFormUl>
      </MediaDiv>
    </MediaContainer>
  )
}

export default MediaWrapper
