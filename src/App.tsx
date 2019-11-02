import React from 'react';
import Layout from './components/Layout/index';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
};

export default App;
