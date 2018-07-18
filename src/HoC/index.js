import React from 'react';
import chatImg from '../chat.png';

import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import withMouse from './withMouse';

import IssueText from '../components/IssueText';
import NotAuthUser from './NotAuthUser';
import Avatar from '../components/Avatar';

const HoC = ({ mouse }) => {
  return (
    <div>
      <h3>Personal credentials here.</h3>
      <h3>Personal credentials here.</h3>
      <h3>Personal credentials here.</h3>
      <IssueText desc="No auth logic inside the page component" />
      <IssueText desc="No mouse logic inside the page component" />
      <Avatar
        src={chatImg}
        style={{ position: 'absolute', top: mouse.y, left: mouse.x }}
      />
    </div>
  );
};

export default compose(
  branch(({ isAuth }) => !isAuth, renderComponent(NotAuthUser)),
  withMouse
)(HoC);
