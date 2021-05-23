import { Layout } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import Filter from './Filter';
import Header from './Header';

import 'antd/dist/antd.css';

const Document = () => {
  const [status, setStatus] = useState('');
  const [docName, setDocName] = useState('');
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { Content, Sider } = Layout;

  const SERVER_URL = 'http://localhost:3000/api/';

  const handleStatus = (status) => {
    setStatus(status);
  };
  const handleDocName = (status) => {
    setDocName(status);
  };

  const addDoc = () => {
    const newDoc = {
      status,
      name: docName,
      channel: 'somechannel',
      group: 'somegroup',
      date: 'someday',
      type: 'sometype',
      adress: 'somewhere',
    };
    axios
      .post(`${SERVER_URL}documents`, newDoc)
      .then((response) => {
        setDocs([...docs, { ...response.data, key: response.data.id }]);
      })
      .catch((error) => console.warn(error));
  };

  const getDocs = () => {
    setLoading(true);
    axios
      .get(`${SERVER_URL}documents?page=1&limit=20`)
      .then((response) => {
        const docReceived = response.data.data;
        const docWithKey = docReceived.map((doc) => ({ ...doc, key: doc.id }));
        setDocs(docWithKey);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
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
        <Header />
        <Content style={{ backgroundColor: 'whitesmoke' }}>
          <Dashboard
            data={docs}
            loading={loading}
            handleDocName={handleDocName}
            docName={docName}
            addDoc={addDoc}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Document;
