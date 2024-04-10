import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    justify-content: center;
`;

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  margin-top: 30px;
  font-weight: 900;
  font-size: 32px;
  text-transform: uppercase;
  opacity: 0.7;
`;

const StyledSubTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  font-weight: 500;
  margin-top: 30px;
  font-size: 24px;
  text-align: center;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-text-primary-color);
  font-weight: 900;
  margin-top: 30px;
  font-size: 14px;
`;

export interface PageContentProps {
  title: any;
  subtitle?: any;
  content?:any;
}

const PageContent: React.FC<PageContentProps> = ({ title, subtitle = '',content=null }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      {subtitle ? <StyledSubTitle>{subtitle}</StyledSubTitle> : null}
      {content ? <StyledContent>{content}</StyledContent>:null}
    </StyledContainer>
  );
};

export default PageContent;