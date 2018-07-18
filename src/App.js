import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import JayChungAvatar from './avatar_jay.png';
import styled from 'styled-components';

import { Nav, NavItem, TabContent, TabPane } from 'components/Navs';
import { Checkbox } from 'components/Checkbox';
import { Value } from 'react-powerplug';
import Avatar from './components/Avatar';

import personalData from './personal_data.json';

/** containers */
import ContainerComponentPattern from './ContainerComponentPattern';
import CompoundComponentPattern from './CompoundComponentPattern';
import HoC from './HoC';
import RenderPropsPattern from './RenderPropsPattern';

export const AppContext = React.createContext({
  data: []
});

class App extends Component {
  handleChangeAddressAtIndex = newIdx => newAddress => {
    this.setState(state => ({
      data: state.data.map((oldRow, oldIdx) => {
        if (oldIdx === newIdx) {
          return { ...oldRow, address: newAddress };
        }
        return oldRow;
      })
    }));
  };

  toggleAuth = () => this.setState(state => ({ isAuth: !state.isAuth }));

  state = {
    data: personalData,
    isAuth: false,
    handleChangeAddressAtIndex: this.handleChangeAddressAtIndex
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Container>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Modern Web 2018</h1>
          </header>
          <div className="Jay-Chung">
            <Avatar className="avatar" src={JayChungAvatar} />
            <h2>Jay Chung</h2>
          </div>
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
                  <NavItem eventKey="render-props">Render Props</NavItem>
                  <NavItem eventKey="hoc">Higher Order Component</NavItem>
                </Nav>
                <TabContent activeKey={value}>
                  <TabPane lazy eventKey="container-component">
                    <ContainerComponentPattern />
                  </TabPane>
                  <TabPane lazy eventKey="compound-component">
                    <CompoundComponentPattern />
                  </TabPane>
                  <TabPane lazy eventKey="hoc">
                    <HoC isAuth={this.state.isAuth} />
                  </TabPane>
                  <TabPane lazy eventKey="render-props">
                    <RenderPropsPattern />
                  </TabPane>
                </TabContent>
              </Fragment>
            )}
          </Value>
          <CheckAuthBox
            checked={this.state.isAuth}
            onChange={this.toggleAuth}
            label={this.state.isAuth ? 'You are logged in' : 'Check to log in'}
          />
        </Container>
      </AppContext.Provider>
    );
  }
}

export default App;

/** insignificent implementation detail */

const Container = styled.div`
  text-align: center;
  position: relative;

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

  .Jay-Chung {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 32px;

    .avatar {
      margin-right: 8px;
    }
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

const CheckAuthBox = styled(Checkbox)`
  position: absolute;
  left: 24px;
  top: 24px;
  color: white;
`;
