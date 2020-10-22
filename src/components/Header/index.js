import React from "react";
import { Layout, Menu } from "antd";

const AntdHeader = Layout.Header;

const Header = () => {
  // const handleClick = () => {};
  // selectedKeys={[current]}
  return (
    <AntdHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Users</Menu.Item>
      </Menu>
    </AntdHeader>
  );
};

export default Header;
