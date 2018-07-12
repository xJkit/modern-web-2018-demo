import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import { Nav, NavItem, TabContent, TabPane } from 'components/Navs';
import { Value } from 'react-powerplug';

/** containers */
import NoPattern from './NoPattern';
import CompoundComponent from './CompoundComponent';
import HOC from './HOC';
import RenderProps from './RenderProps';

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
    color: white;
  }

  .App-title {
    font-size: 1.5em;
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

class App extends Component {
  render() {
    return (
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2 className="App-title">Welcome to Modern Web 2018</h2>
        <Value initial="no-pattern">
          {({ value, set }) => (
            <Fragment>
              <Nav
                activeKey={value}
                style={{ padding: '0 16px' }}
                onSelect={set}
              >
                <NavItem eventKey="no-pattern">No Pattern</NavItem>
                <NavItem eventKey="compound-component">
                  Compound Component
                </NavItem>
                <NavItem eventKey="hoc">Higher Order Component</NavItem>
                <NavItem eventKey="render-props">Render Props</NavItem>
              </Nav>
              <TabContent activeKey={value}>
                <TabPane eventKey="no-pattern">
                  <NoPattern />
                </TabPane>
                <TabPane eventKey="compound-component">
                  <CompoundComponent />
                </TabPane>
                <TabPane eventKey="hoc">
                  <HOC />
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
