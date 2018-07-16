import React from 'react';
import styled from 'styled-components';
const StyledEditor = styled.div`
  padding: 2px;
  width: 100%;
  display: flex;
  margin-bottom: 0;
`;

const Editor = ({ isEditing, ...props }) =>
  isEditing ? <StyledEditor {...props} /> : null;

export default Editor;
