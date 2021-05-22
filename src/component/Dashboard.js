import React, { useState } from "react";
import { Input, Typography, Button, Row, Col, Table, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Dashboard = ({ data, handleDocName, docName }) => {
  const [filteredInfo, setFilteredInfo] = useState(null);
  const { Title } = Typography;

  const handleFilter = (filters) => {
    setFilteredInfo(filters);
  };

  const clearFilter = () => {
    setFilteredInfo(null);
  };

  let filtered = filteredInfo || {};

  const columns = [
    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
    },
    {
      title: "Document Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <a>{name}</a>,
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Received", value: "received" },
        { text: "Printed", value: "printed" },
        { text: "Folded", value: "folded" },
        { text: "Sorted", value: "sorted" },
        { text: "Delivered", value: "delivered" },
      ],
      filteredValue: filtered.status || null,
      onFilter: (value, record) => {
        console.log(filteredInfo);
        record.status.includes(value);
      },
    },
    {
      title: "Date modified",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Adress",
      dataIndex: "adress",
      key: "adress",
    },
  ];

  return (
    <div>
      <div style={{ backgroundColor: "white", padding: "16px" }}>
        <div>Breadcrumbs</div>
        <div>
          <Title level={2}>Document Browser</Title>
        </div>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "16px", padding: "16px" }}
      >
        <Row justify="space-between">
          <Col>
            <Input
              style={{ width: "100%" }}
              addonBefore="Doc Name: "
              placeholder="Ant Design"
              onChange={(e) => handleDocName(e.target.value)}
            />{" "}
          </Col>
          <Col>
            <Button type="primary" style={{ width: "100%" }}>
              <PlusOutlined />
              Add new
            </Button>
          </Col>
        </Row>
      </div>
      <div
        style={{ backgroundColor: "white", margin: "16px", padding: "16px" }}
      >
        <Row>
          <Col span={24}>
            <Row justify="space-between">
              <Col>
                <Title level={3}>Dashboard</Title>
              </Col>
              <Col>
                <Select defaultValue="Date" className="">
                  Date
                </Select>
                <Button onClick={clearFilter}> Reset</Button>
              </Col>
            </Row>
            <Table
              columns={columns}
              dataSource={data}
              onChange={handleFilter}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
