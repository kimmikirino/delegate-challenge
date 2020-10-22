import React from "react";
import { Layout as AntdLayout, Row, Col } from "antd";

import Header from "../Header";

import "./index.css";

const { Content, Footer } = AntdLayout;

const Layout = ({ children }) => {
  return (
    <AntdLayout className="layout">
      <Header />
      <Content>
        <Row>
          <Col span={16} offset={4}>{children}</Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Delegate Challenge Created by Jaqueline Kirino
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
