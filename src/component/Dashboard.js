import React, { useState } from "react";
import { Input, Typography, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";


const Dashboard = () => {
    const [docName, setDocName] = useState('');
    const {Title, Text} = Typography;
    return (
      <div>
        <div>Breadcrumbs</div>
        <div>
          <Title>Document Browser</Title>
        </div>
        <div style={{backgroundColor: "white", padding: "16px"}}>
          <Row>
            <Col span={6}>
              <Input
                addonBefore='Doc Name: '
                placeholder="Ant Design"
                onChange={(e) => setDocName(e.target.value)}
              />{" "}
            </Col>
            <Col span={9}>

            </Col>
            <Col span={4}>
              <Button type="primary">
                <PlusOutlined />
                Add new
              </Button>
            </Col>
          </Row>
        </div>
        {docName}
      </div>
    );
}

export default Dashboard;