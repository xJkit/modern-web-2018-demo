import React from 'react';
import styled from 'styled-components';
import { InlineEditingContext } from './index';
import { Button } from '../../Buttons';
import MdCheck from 'react-icons/lib/md/check';

const IconWrapper = styled.i`
  display: block;
  font-size: 16px;
  vertical-align: sub;
`;

const ButtonWrapper = styled(Button)`
  height: 32px;
  padding: 5px 0;
  text-align: center;
`;

const EditorButton = props => (
  <InlineEditingContext.Consumer>
    {({ handleSave }) => (
      <ButtonWrapper
        {...props}
        compact
        btnStyle="flat"
        style={{ marginLeft: 2 }}
        onClick={handleSave}
      >
        <IconWrapper>
          <MdCheck />
        </IconWrapper>
      </ButtonWrapper>
    )}
  </InlineEditingContext.Consumer>
);

export default EditorButton;
