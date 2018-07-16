import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Display = styled.div`
  cursor: pointer;
  font-size: 13px;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid transparent;
  min-width: 206px;

  &:hover {
    border: 1px solid #0096cc;
    border-radius: 3px;
  }
`;

const Editor = styled.div`
  padding: 2px;
  width: 100%;
  display: flex;
  margin-bottom: 0;
`;

const StyleInput = styled.input`
  width: 100%;

  &:focus {
    min-height: 32px;
    border-color: #0096cc;
    outline: 0;
    transition: border-color 0.2s linear 0s;
  }
`;

const Input = props => <StyleInput className="form-control" {...props} />;

class InlineEditing extends React.Component {
  static Input = Input;
  static Button = Button;
  static Display = Display;
  static Editor = Editor;
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

  toggleEditing = () => {
    this.setState(state => ({ isEditing: !state.isEditing }));
  };

  render() {
    if (this.props.render) {
      return this.props.render({
        value: this.state.value,
        isEditing: this.state.isEditing,
        handleChangeInput: this.handleChangeInput,
        handleSave: this.handleSave,
        toggleEditing: this.toggleEditing
      });
    }
    return this.props.children({
      value: this.state.value,
      isEditing: this.state.isEditing,
      handleChangeInput: this.handleChangeInput,
      handleSave: this.handleSave,
      toggleEditing: this.toggleEditing
    });
    // if (this.state.isEditing) {
    //   return (
    //     <Editor>
    //       <Input value={this.state.value} onChange={this.handleChangeInput} />
    //       <Button onClick={this.handleSave} />
    //     </Editor>
    //   );
    // }
    // return (
    //   <Display
    //     onClick={() =>
    //       this.setState(state => ({ isEditing: !state.isEditing }))
    //     }
    //   >
    //     {this.props.value}
    //   </Display>
    // );
  }
}

export default InlineEditing;
