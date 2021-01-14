import React, { Component } from 'react'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App
