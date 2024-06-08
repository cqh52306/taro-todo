import React from "react";
import { View, Text, ViewProps } from "@tarojs/components";

// 定义Footer组件的props类型
interface FooterProps {
  activeCount?: number; // 可能为undefined或number类型
  completedCount?: number; // 可能为undefined或number类型
  onClearCompleted?: () => void; // 清除已完成项的回调函数，可能不存在
}

// Footer组件类
class Footer extends React.Component<FooterProps> {
  // 清除已完成项的方法
  onClearCompleted = () => {
    console.log("onClearCompleted");
    if (this.props.onClearCompleted) {
      this.props.onClearCompleted();
    }
  };

  // 渲染方法
  render() {
    const { activeCount = 0, completedCount = 0 } = this.props; // 默认值
    const itemWord = activeCount === 1 ? "item" : "items";
    return (
      <View className="footer">
        <View className="footer-content">
          <Text className="todo-count">
            {activeCount === 0 ? "No" : activeCount} {itemWord} left
          </Text>
          {completedCount > 0 && (
            <Text
              className="clear-completed-text"
              onClick={this.onClearCompleted}
            >
              Clear completed
            </Text>
          )}
        </View>
      </View>
    );
  }
}

export default Footer;
