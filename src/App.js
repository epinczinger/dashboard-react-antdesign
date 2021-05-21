import Filter from "./component/Filter";
import Dashboard from "./component/Dashboard";
import { Row, Col, Layout,  } from "antd";
import React from "react";
import "antd/dist/antd.css";

function App() {
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
        <Sider style={{ padding: "24px 16px 0", backgroundColor: "white" }}>
          <Filter />
        </Sider>
        <Content
          style={{ padding: "24px 16px 0", backgroundColor: "whitesmoke" }}
        >
          <Dashboard />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
