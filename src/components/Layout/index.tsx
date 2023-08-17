import React from "react";
import { Layout } from "antd";
import Nav from "components/Navigation";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const LayoutPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      <Layout>
        <Layout>
          <Header style={{ padding: 0 }}>Header</Header>
          <Content style={{ margin: "0 16px" }}>
            <Outlet />
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>Enpozito ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
