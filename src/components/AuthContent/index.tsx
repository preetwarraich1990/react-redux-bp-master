import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  margin-top: 30px;
  font-weight: bold;
  font-size: 24px;
`;

const StyledSubTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  font-weight: 400;
  margin-top: 30px;
  font-size: 16px;
`;

const StyledContent = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  font-weight: 400;
  margin-top: 30px;
  font-size:12px;
  `;

export interface AuthContentProps {
  title: any;
  subtitle?: any;
  content?:any;
}

const AuthContent: React.FC<AuthContentProps> = ({ title, subtitle = '',content=null }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {subtitle ? <StyledSubTitle>{subtitle}</StyledSubTitle> : null}
      {content ? <StyledContent>{content}</StyledContent>:null}
    </StyledContainer>
  );
};

export default AuthContent;