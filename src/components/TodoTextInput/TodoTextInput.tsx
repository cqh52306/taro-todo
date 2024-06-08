import Taro from '@tarojs/taro';
import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { Input } from '@tarojs/components';

import './TodoTextInput.scss';

interface TodoTextInputProps {
  text?: string;
  newTodo?: boolean;
  editing?: boolean;
  placeholder?: string;
  onSave: (text: string) => void;
}

interface TodoTextInputState {
  todoText: string;
}

class TodoTextInput extends Component<TodoTextInputProps, TodoTextInputState> {
  state: TodoTextInputState = {
    todoText: this.props.text || ''
  };

  handleSubmit = (e: any) => {
    console.log('handleSubmit', e);
    const text = e.target.value.trim();
    this.props.onSave(text);
    if (this.props.newTodo) {
      this.setState({ todoText: '' });
    }
  };

  handleSubmitKey = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log('handleSubmitKey', e);
    const text = e.currentTarget.value.trim();
    if (e.key === 'Enter') {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ todoText: '' });
      }
    }
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) return;
    console.log('handleChange', e);
    this.setState({ todoText: e.target.value });
  };

  handleInput = (e: any) => {
    console.log('handleInput', e);
    this.setState({ todoText: e.target.value });
  };

  handleBlur = (e: any) => {
    console.log('handleBlur', e);
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <Input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        placeholderTextColor='#e6e6e6'
        type='text'
        placeholder={this.props.placeholder}
        autoFocus
        confirmType='done'
        value={this.state.todoText}
        onBlur={this.handleBlur as any} // 解决类型不匹配问题
        onChange={this.handleChange}
        onInput={this.handleInput}
        onKeyDown={this.handleSubmitKey}
        onConfirm={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
