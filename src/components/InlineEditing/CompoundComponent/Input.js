import React from 'react';
import styled from 'styled-components';
import { InlineEditingContext } from './index';

const StyleInput = styled.input`
  width: 100%;

  &:focus {
    min-height: 32px;
    border-color: #0096cc;
    outline: 0;
    transition: border-color 0.2s linear 0s;
  }
`;

const Input = props => (
  <InlineEditingContext.Consumer>
    {({ value, handleChangeInput }) => (
      <StyleInput
        className="form-control"
        {...props}
        value={value}
        onChange={handleChangeInput}
      />
    )}
  </InlineEditingContext.Consumer>
);

export default Input;
