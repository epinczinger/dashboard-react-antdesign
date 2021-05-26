import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input, Typography, Button, Row, Col, Table, Select,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Dashboard = ({
  data, handleDocName, loading, addDoc,
}) => {
  const [filteredInfo, setFilteredInfo] = useState(null);
  const { Title } = Typography;

  const handleFilter = (filters) => {
    setFilteredInfo(filters);
  };

  const clearFilter = () => {
    setFilteredInfo(null);
  };

  const filtered = filteredInfo || {};

  const columns = [
    {
      title: 'Channel',
      dataIndex: 'channel',
      key: 'channel',
    },
    {
      title: 'Document Name',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line react/display-name
      render: (name) => <Button type="link">{name}</Button>,
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Received', value: 'received' },
        { text: 'Printed', value: 'printed' },
        { text: 'Folded', value: 'folded' },
        { text: 'Sorted', value: 'sorted' },
        { text: 'Delivered', value: 'delivered' },
      ],
      filteredValue: filtered.status || null,
      onFilter: (value, record) => record.status.toLowerCase().indexOf(value) === 0,
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Date modified',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Adress',
      dataIndex: 'adress',
      key: 'adress',
    },
  ];

  return (
    <div>
      <div
        style={{ backgroundColor: 'white', margin: '16px', padding: '16px' }}
      >
        <Row justify="space-between">
          <Col>
            <Input
              style={{ width: '100%' }}
              addonBefore="Doc Name: "
              placeholder="Ant Design"
              onChange={(e) => handleDocName(e.target.value)}
            />
            {' '}
          </Col>
          <Col>
            <Button type="primary" onClick={addDoc} style={{ width: '100%' }}>
              <PlusOutlined />
              Add new
            </Button>
          </Col>
        </Row>
      </div>
      <div
        style={{ backgroundColor: 'white', margin: '16px', padding: '16px' }}
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
            {!loading && (
            <Table
              columns={columns}
              dataSource={data}
              onChange={handleFilter}
            />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.defaultProps = {
  data: [],
  loading: false,
  handleDocName: () => {},
  addDoc: () => {},
};

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleDocName: PropTypes.func,
  loading: PropTypes.bool,
  addDoc: PropTypes.func,
};
