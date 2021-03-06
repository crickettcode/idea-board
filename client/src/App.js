import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import IdeaPage from './components/IdeaPage'
import { injectGlobal } from "styled-components"


injectGlobal`
@import url ('https://fonts.googleapis.com/css?family=Gugi');
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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

export default App
