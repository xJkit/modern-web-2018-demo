import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import { Button } from '../../Buttons';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';

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

const EditorButton = ({ iconType, tip, ...restProps }) => (
  <ButtonWrapper
    {...restProps}
    compact
    btnStyle="flat"
    style={{ marginLeft: 2 }}
  >
    <IconWrapper>
      {iconType === 'ok' && <MdCheck />}
      {iconType === 'cancel' && <MdClear />}
    </IconWrapper>
  </ButtonWrapper>
);

EditorButton.propTypes = {
  iconType: PropTypes.oneOf(['ok', 'cancel'])
};

EditorButton.defaultProps = {
  iconType: 'ok'
};

export default EditorButton;
