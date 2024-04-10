import * as React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const BackgroundGradient = styled.div`
  padding-top: 18px;
  padding-bottom: 30px;
  border: 1px solid rgba(222, 19, 19, 1);
  border-top: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  /* ff 3.6+ */
  background: -moz-linear-gradient(
    110deg,
    rgba(192, 8, 20, 1) 0%,
    rgba(192, 8, 20, 0.79) 7%,
    rgba(192, 8, 20, 0.39) 28%,
    rgba(192, 8, 20, 0.26) 42%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    110deg,
    rgba(192, 8, 20, 1) 0%,
    rgba(192, 8, 20, 0.79) 7%,
    rgba(192, 8, 20, 0.39) 28%,
    rgba(192, 8, 20, 0.26) 42%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    110deg,
    rgba(192, 8, 20, 1) 0%,
    rgba(192, 8, 20, 0.79) 7%,
    rgba(192, 8, 20, 0.39) 28%,
    rgba(192, 8, 20, 0.26) 42%
  );

  /* ie 10+ */
  background: -ms-linear-gradient(
    110deg,
    rgba(192, 8, 20, 1) 0%,
    rgba(192, 8, 20, 0.79) 7%,
    rgba(192, 8, 20, 0.39) 28%,
    rgba(192, 8, 20, 0.26) 42%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    110deg,
    rgba(192, 8, 20, 1) 0%,
    rgba(192, 8, 20, 0.79) 7%,
    rgba(192, 8, 20, 0.39) 28%,
    rgba(192, 8, 20, 0.26) 42%
  );
`;

const StyledLoader = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;

export interface AuthLoaderProps {
  text?: string;
}

const AuthLoader: React.FC<AuthLoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <BackgroundGradient>
      <StyledLoader>
        <Loader type="Oval" color="#FFF" height={80} width={80} />
        <StyledText>{text}</StyledText>
      </StyledLoader>
    </BackgroundGradient>
  );
};

export default AuthLoader;
