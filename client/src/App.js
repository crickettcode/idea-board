import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login Link</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/user/:userId" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
