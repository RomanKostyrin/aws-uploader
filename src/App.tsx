import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Images from "components/Images";
import LayoutPage from "components/Layout";

const { Content } = Layout;

const El = () => {
  return (
    <Layout>
      <Content style={{ margin: "0 16px" }}>
        <div style={{ padding: 24, minHeight: 360 }}>bla</div>
      </Content>
    </Layout>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<El />} />
        <Route path="/images/:id" element={<Images />}>
          <Route path="/images/:id/:img" element={<El />} />
        </Route>
        <Route path="/upload" element={<El />} />
      </Route>
    </Routes>
  );
};

export default App;
