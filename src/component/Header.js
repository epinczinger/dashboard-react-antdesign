import React from 'react';
import { Typography, Breadcrumb, Button } from 'antd';

const Header = () => {
  const { Title } = Typography;
  return (
    <div style={{ backgroundColor: 'white', padding: '16px' }}>
      <Breadcrumb>
        <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item>
          <Button type="text">Documents</Button>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Title level={2}>Document Browser</Title>
      </div>
    </div>
  );
};

export default Header;
