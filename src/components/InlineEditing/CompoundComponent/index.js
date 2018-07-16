import React from 'react';
import PropTypes from 'prop-types';

/** compound components */
import Button from './Button';
import Display from './Display';
import Editor from './Editor';
import Input from './Input';

export const InlineEditingContext = React.createContext({
  value: ''
});

class InlineEditing extends React.Component {
  static Editor = Editor;
  static Display = Display;
  static Input = Input;
  static Button = Button;
  static propTypes = {
    value: PropTypes.string.isRequired
  };
  state = {
    isEditing: false,
    value: this.props.value
  };

  handleChangeInput = evt => {
    this.setState({ value: evt.target.value });
  };

  handleSave = () => {
    const { onSave } = this.props;
    onSave(this.state.value);

    this.setState(state => ({
      isEditing: !state.isEditing
    }));
  };

  render() {
    const { children } = this.props;
    return (
      <InlineEditingContext.Provider
        value={{
          value: this.state.value,
          handleChangeInput: this.handleChangeInput,
          handleSave: this.handleSave
        }}
      >
        {React.Children.map(children, childElement => {
          if (childElement.type.name === 'Display') {
            return React.cloneElement(childElement, {
              isEditing: this.state.isEditing,
              value: this.state.value,
              onClick: () =>
                this.setState(state => ({ isEditing: !state.isEditing }))
            });
          }
          return React.cloneElement(childElement, {
            isEditing: this.state.isEditing
          });
        })}
      </InlineEditingContext.Provider>
    );
  }
}

export default InlineEditing;
