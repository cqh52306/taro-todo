// src/components/Header/Header.tsx
import React from 'react';
import { View, Text, Button } from '@tarojs/components';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  const title = useSelector((state: any) => state.navigation.title || '');

  return (
<View className="header">
  <Button onClick={onToggleSidebar} className="menu-button">☰</Button>
  <Text className="title">{title}</Text>
</View>
  );
};

export default Header;
