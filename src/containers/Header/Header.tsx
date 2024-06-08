import React from 'react';
import { View, Text } from '@tarojs/components';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TodoTextInput from '../../components/TodoTextInput/TodoTextInput';
import FilterLink from '../FilterLink/FilterLink';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/TodoFilters';
import * as TodoActions from '../../actions';
import './Header.scss';

const FILTER_TITLES: { [key: string]: string } = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface HeaderProps extends PropsFromRedux {}

class Header extends React.Component<HeaderProps> {
  onCheckClickHandler = () => {
    console.log('onCheckClickHandler');
    const { actions } = this.props;
    actions.completeAllTodos();
  };

  onSaveHandler = (text: string) => {
    if (text.length !== 0) {
      this.props.actions.addTodo(text);
    }
  };

  render() {
    return (
      <View className='header'>
        <View className='header-title-wrap'>
          <Text className='title'>todo-list</Text>
        </View>
        <View className='filters'>
          {Object.keys(FILTER_TITLES).map((filter, index) => (
            <View key={index} className='filters-item'>
              <FilterLink filter={filter} />
            </View>
          ))}
        </View>
        <View className='textinput-wrap'>
          <Text className='textinput-wrap-icon' onClick={this.onCheckClickHandler}>❯</Text>
          <View className='textinput-wrap-input'>
            <TodoTextInput
              className='textinput-wrap-input'
              newTodo
              onSave={this.onSaveHandler}
              placeholder='What needs to be done?'
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connector(Header);
