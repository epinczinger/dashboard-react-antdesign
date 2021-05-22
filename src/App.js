import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './component/Dashboard';
import Filter from './component/Filter';
import 'antd/dist/antd.css';

function App() {
  const [status, setStatus] = useState('received');
  const [docName, setDocName] = useState('');
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { Content, Sider } = Layout;

  const handleStatus = (status) => {
    setStatus(status);
  };
  const handleDocName = (status) => {
    setDocName(status);
  };

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);

      const response = await axios.get(
        'http://localhost:3000/api/documents?page=1&limit=10',
      );
      setDocs(response.data.data);
      setLoading(false);
    };
    fetchDocs();
  }, []);

  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Sider
          style={{
            padding: '24px 16px 0',
            backgroundColor: 'white',
            boxShadow: '3px 1px 4px 0px rgba(199,199,199,0.55)',
          }}
        >
          <Filter status={status} handleStatus={handleStatus} />
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: 'whitesmoke' }}>
            <Dashboard
              data={docs}
              loading={loading}
              handleDocName={handleDocName}
              docName={docName}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
