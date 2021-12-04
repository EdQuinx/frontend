import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'
import 'react-bootstrap'

import { connect } from 'react-redux';
import Preloader from './components/preloader';
import HeaderBar from './components/headerbar';
import LeftPanel from './components/leftpanel';
import { AppWrapper } from './state';


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <div className="main-wrapper mini-sidebar" id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="mini-sidebar" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            <HeaderBar />
            <LeftPanel />
          </div>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
