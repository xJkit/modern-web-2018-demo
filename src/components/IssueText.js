import React from 'react';
import styled from 'styled-components';

const DisplayTable = styled.div`
  display: table;
  margin: 16px auto;
`;

const DisplayTableRow = styled.div`
  display: table-row;
  text-align: left;
`;

const Issue = styled.h5`
  color: red;

  &:before {
    content: 'Issue: ';
  }
`;

const Desc = styled.h6`
  color: #666;

  &:before {
    content: '>>> ';
  }
`;

const IssueText = ({ title = '', desc = '' }) => (
  <DisplayTable>
    <DisplayTableRow>
      <Issue>{title}</Issue>
    </DisplayTableRow>
    <DisplayTableRow>
      <Desc>{desc}</Desc>
    </DisplayTableRow>
  </DisplayTable>
);

export default IssueText;
