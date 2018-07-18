import React from 'react';

const withMouse = BaseComponent =>
  class extends React.Component {
    state = { x: -9999, y: -9999 };

    handleMousePosition = evt => {
      this.setState({
        x: evt.pageX,
        y: evt.pageY
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMousePosition} style={{ height: '100%' }}>
          <BaseComponent {...this.props} mouse={this.state} />
        </div>
      );
    }
  };

export default withMouse;
