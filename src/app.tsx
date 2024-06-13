// src/app.tsx
import { Component, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { View } from '@tarojs/components';
import configStore from './store';
import './reset.scss';
import './app.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const store = configStore();

class App extends Component<PropsWithChildren> {
  state = {
    isSidebarOpen: false,
  };

  toggleSidebar = () => {
    this.setState((prevState:any) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  render() {
    const { isSidebarOpen } = this.state;
    return (
      <Provider store={store}>
        <Header onToggleSidebar={this.toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={this.closeSidebar} />
        <View className="page-content">
          {this.props.children}
        </View>
      </Provider>
    );
  }
}

export default App;
