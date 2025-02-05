import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} style={{ height: '100vh' }}>
      <div className="p-4 text-center text-white font-bold">Logo</div>
      <Menu theme="dark" mode="vertical" defaultSelectedKeys={['3']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
      <div className="text-center p-4">
        {collapsed ? (
          <MenuUnfoldOutlined onClick={() => setCollapsed(false)} className="text-white text-xl cursor-pointer" />
        ) : (
          <MenuFoldOutlined onClick={() => setCollapsed(true)} className="text-white text-xl cursor-pointer" />
        )}
      </div>
    </Sider>
  );
};

export default Sidebar;
