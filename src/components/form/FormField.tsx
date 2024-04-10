/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from 'styled-components';

interface FormFieldProps {
  children: any;
}

const FormFieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  text-align: left;
`;

const FormField: React.FC<FormFieldProps> = ({ children }) => {
  return <FormFieldContainer>{children}</FormFieldContainer>;
};

export default FormField;
