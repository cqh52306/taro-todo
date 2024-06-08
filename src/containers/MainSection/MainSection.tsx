import React from "react";
import { View } from "@tarojs/components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "../../actions";
import Footer from "../../components/Footer/Footer";
import TodoList from "../TodoList/TodoList";
import { getCompletedTodoCount } from "../../selectors";

import "./MainSection.scss";

// 定义TodoActions的类型（如果有具体的action类型定义，请使用那些）
type TodoActionsType = ReturnType<any>;

// 定义从Redux state映射到props的类型
interface MappedStateProps {
  todosCount: number;
  completedCount: number;
}

// 定义从Redux dispatch映射到props的类型
interface MappedDispatchProps {
  actions: TodoActionsType;
}

// 定义组件自身的props（如果需要的话）
interface OwnProps {}

// 组合所有props类型
type MainSectionProps = OwnProps & MappedStateProps & MappedDispatchProps;

// 定义MainSection组件
class MainSection extends React.Component<MainSectionProps> {
  onCheckClickHandler = () => {
    this.props.actions.completeAllTodos();
  };

  onChangeHandler = () => {};

  render() {
    const { todosCount, completedCount, actions } = this.props;
    return (
      <View className="main">
        <TodoList />
        {!!todosCount && (
          <Footer
            completedCount={completedCount}
            activeCount={todosCount - completedCount}
            onClearCompleted={actions.clearCompleted}
          />
        )}
      </View>
    );
  }
}

// 使用connect高阶组件，并传入映射函数
const mapStateToProps = (state): MappedStateProps => ({
  todosCount: state.todos?.length || 0,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch): MappedDispatchProps => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

// 导出连接后的组件
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
