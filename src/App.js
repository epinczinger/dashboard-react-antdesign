import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Document from './component/Document';
import Home from './component/Home';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/documents" component={Document} />
      </Switch>
    </Router>
  </div>
);

export default App;
