import React, { Component } from 'react';  
import { View, Checkbox, Label, CheckboxGroup, Text } from '@tarojs/components';  
import classnames from 'classnames';  
  
import TodoTextInput from '../TodoTextInput/TodoTextInput';  
import './TodoItem.scss';  
  
// 定义 Todo 类型  
interface Todo {  
  id: number;  
  text: string;  
  completed: boolean;  
}  
  
// 定义 TodoItemProps 类型  
interface TodoItemProps {  
  todo: Todo;  
  onSave?: (text: string) => void;  
  onDestroy?: () => void;  
  onEditTodo?: (id: number, text: string) => void;  
  onDeleteTodo?: (id: number) => void;  
  onCompleteTodo?: (id: number) => void;  
}  
  
// 定义 TodoItemState 类型  
interface TodoItemState {  
  editing: boolean;  
  editText?: string; // 如果需要保存编辑时的文本状态，可以添加这个字段  
}  
  
class TodoItem extends Component<TodoItemProps, TodoItemState> {  
  static defaultProps: Partial<TodoItemProps> = {  
    todo: {} as Todo,  
  };  
  
  state: TodoItemState = {  
    editing: false,  
    // editText: '', // 如果需要保存编辑时的文本状态，可以取消注释这行代码并初始化它  
  };  
  
  handleSubmit = () => {  
    // 这里假设 editText 已经在 state 中定义和更新  
    // const val = this.state.editText.trim();  
    // ...  
    // 因为这个例子中并没有直接使用到 editText，所以我们先忽略它  
  };  
  
  handleDoubleClick = () => {  
    this.setState({ editing: true });  
  };  
  
  handleSave = (id: number, text: string) => {  
    if (text.length === 0) {  
      this.props.onDeleteTodo?.(id);  
    } else {  
      this.props.onEditTodo?.(id, text);  
    }  
    this.setState({ editing: false });  
  };  
  
  handleCompleteTodo = (todo: Todo) => {  
    console.log('handleCompleteTodo');  
    this.props.onCompleteTodo?.(todo.id);  
  };  
  
  render() {  
    const { todo } = this.props;  
  
    let element;  
    if (this.state.editing) {  
      element = (  
        <TodoTextInput  
          text={todo.text}  
          editing={this.state.editing}  
          onSave={(text) => this.handleSave(todo.id, text)}  
        />  
      );  
    } else {  
      element = (  
        <View className={classnames({  
          'list-item': true,  
          completed: todo.completed,  
          editing: this.state.editing,  
        })}>  
          <CheckboxGroup onChange={() => this.handleCompleteTodo(todo)}>  
            <Label className='checkbox-label'>  
              <Checkbox className='checkbox' checked={todo.completed} />  
              <Text style={{ color: '#4d4d4d' }}>{todo.text}</Text>  
            </Label>  
          </CheckboxGroup>  
        </View>  
      );  
    }  
  
    return (  
      <View className={classnames({  
        'list-item': true,  
        completed: todo.completed,  
        editing: this.state.editing,  
      })}>  
        {element}  
      </View>  
    );  
  }  
}  
  
export default TodoItem;