import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import { Nav, NavItem, TabContent, TabPane } from 'components/Navs';
import { Value } from 'react-powerplug';

/** containers */
import ContainerComponentPattern from './ContainerComponentPattern';
import CompoundComponentPattern from './CompoundComponentPattern';
import HoC from './HOC';
import RenderProps from './RenderProps';

class App extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Modern Web 2018</h1>
        </header>
        <h2>Jay Chung</h2>
        <Value initial="container-component">
          {({ value, set }) => (
            <Fragment>
              <Nav
                activeKey={value}
                style={{ padding: '0 16px' }}
                onSelect={set}
              >
                <NavItem eventKey="container-component">
                  Container Component
                </NavItem>
                <NavItem eventKey="compound-component">
                  Compound Component
                </NavItem>
                <NavItem eventKey="hoc">Higher Order Component</NavItem>
                <NavItem eventKey="render-props">Render Props</NavItem>
              </Nav>
              <TabContent activeKey={value}>
                <TabPane eventKey="container-component">
                  <ContainerComponentPattern />
                </TabPane>
                <TabPane eventKey="compound-component">
                  <CompoundComponentPattern />
                </TabPane>
                <TabPane eventKey="hoc">
                  <HoC />
                </TabPane>
                <TabPane eventKey="render-props">
                  <RenderProps />
                </TabPane>
              </TabContent>
            </Fragment>
          )}
        </Value>
      </Container>
    );
  }
}

export default App;

/** insignificent implementation detail */

const Container = styled.div`
  text-align: center;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
  }

  .App-title {
    font-size: 1.5em;
    color: white;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
