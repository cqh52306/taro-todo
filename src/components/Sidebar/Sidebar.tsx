import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useDispatch } from 'react-redux';
import { updateTitle } from '../../store/actions/navigationActions';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const menuItems = [
    { title: '首页', path: '/pages/index/index' },
    { title: '连接', path: '/pages/connect/index' },
    { title: '状态', path: '/pages/status/index' },
    { title: '控制', path: '/pages/control/index' },
    { title: '人脸识别', path: '/pages/facerecognition/index' },
    { title: '权限管理', path: '/pages/permissionmanagement/index' },
    { title: '设置', path: '/pages/settings/index' },
  ];

  const handleMenuItemClick = (title: string, path: string) => {
    Taro.navigateTo({ url: path });
    dispatch(updateTitle(title));
    onClose();
  };

  return (
    <View>
      {isOpen && <View className={styles.overlay} onClick={onClose} />}
      <View className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ScrollView>
          {menuItems.map((item) => (
            <View key={item.title} onClick={() => handleMenuItemClick(item.title, item.path)} className={styles.menuItem}>
              <Text>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Sidebar;
