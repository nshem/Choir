import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrimarySearchAppBar from './components/navbar/navbar.js';
import Content from './components/content/Content.js'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Content />
    </React.Fragment>
  );
}

export default App;
