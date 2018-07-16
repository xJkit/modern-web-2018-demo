import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  cursor: pointer;
  font-size: 13px;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid transparent;
  min-width: 206px;

  &:hover {
    border: 1px solid #0096cc;
    border-radius: 3px;
  }
`;

const Display = ({ isEditing, value, ...props }) =>
  isEditing ? null : <StyledDisplay {...props}>{value}</StyledDisplay>;

export default Display;
