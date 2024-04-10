import * as React from 'react';
import styled from 'styled-components';


const BackgroundGradient = styled.div`
  padding-top: 18px;
  padding-bottom: 30px;
  border: 1px solid rgba(222, 19, 19, 1);
  border-top: none;
  position: relative;

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

export interface AuthBackgroundProps {
  children: any;
}

const AuthBackground: React.FC<AuthBackgroundProps> = ({ children }) => {
  return <BackgroundGradient>{children}</BackgroundGradient>;
};

export default AuthBackground;
