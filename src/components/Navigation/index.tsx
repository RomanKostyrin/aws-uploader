import React, { useState } from "react";
import { FileImageOutlined, FolderViewOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

type ClickedItem = {
  key: string;
  keyPath: string[];
};

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Images", "1", <FolderViewOutlined />, [
    getItem("2010", "images/2010"),
    getItem("2011", "images/2011"),
    getItem("2012", "images/2012"),
    getItem("2013", "images/2013"),
    getItem("2014", "images/2014"),
    getItem("2015", "images/2015"),
    getItem("2016", "images/2016"),
    getItem("2017", "images/2017"),
    getItem("2018", "images/2018"),
    getItem("2019", "images/2019"),
    getItem("2020", "images/2020"),
    getItem("2021", "images/2021"),
    getItem("2022", "images/2022"),
    getItem("2023", "images/2023"),
    getItem("2024", "images/2024"),
  ]),
  getItem("Upload files", "upload", <FileImageOutlined />),
];

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuClickHandler = (item: ClickedItem) => {
    navigate(item.key);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} onClick={menuClickHandler} />
    </Sider>
  );
};

export default Nav;
