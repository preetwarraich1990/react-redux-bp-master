import * as React from 'react';
import styled from 'styled-components';

const LineContainer = styled.div`
  margin: 10px 0;
  margin-bottom: 20px;
  height: 28px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Line = styled.div`
  height: 2px;
  background-color: ${(props: LineProps) => props.lineColor};
  display: flex;
  flex: 5;
`;

const Content = styled.span`
  margin: 0 15px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export interface DividerProps {
  text?: string;
  lineColor?: string;
}

export interface LineProps {
  lineColor?: string;
}

const Divider: React.FC<DividerProps> = ({
  text,
  lineColor = 'rgba(255, 255, 255, 0.3)',
}) => {
  return (
    <LineContainer>
      <Line lineColor={lineColor} />
      {text ? <Content>{text}</Content> : null}
      {text ? <Line lineColor={lineColor} /> : null}
    </LineContainer>
  );
};

export default Divider;
