import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    This is the Home.
    Go To
    {' '}
    <Link to="/documents">Documents</Link>
  </div>
);

export default Home;
