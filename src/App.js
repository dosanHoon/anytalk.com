import React, { Component } from 'react'
import Header from './components/Header.js'

import Home from './routes/Home.js'
import About from './routes/About.js'
import Login from './routes/Login.js'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div >
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
