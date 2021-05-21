import React, { useState } from "react";
import { Radio, Select, Space, Typography, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const Filter = () => {
  const [status, setStatus] = useState("received");
  const { Title } = Typography;

  const radio = (
    <Radio.Group
      onChange={(e) => setStatus(e.target.value)}
      value={status}
      label="Status"
    >
      <Space direction="vertical">
        <Radio value="received">Received</Radio>
        <Radio value="printed">Printed</Radio>
        <Radio value="folded">Folded</Radio>
        <Radio value="sorted">Sorted</Radio>
        <Radio value="delivered">Delivered</Radio>
      </Space>
    </Radio.Group>
  );
  return (
    <div>
      <Title>Filters</Title>
      <Space direction="vertical">
        <Select defaultValue="Adress" className="filterEl"></Select>
        <Select defaultValue="Date" className="filterEl"></Select>{" "}
        <Select defaultValue="Status" className="filterEl">
            {radio}
        </Select>
        <Select defaultValue="Group" className="filterEl"></Select>
        <Select defaultValue="Date Range" className="filterEl"></Select>
      </Space>
    </div>
  );
};

export default Filter;
