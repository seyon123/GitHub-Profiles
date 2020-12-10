import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Header from './components/Header.js';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  
  render(){  
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/:id">
            <Header></Header>
            <Main></Main>     
            <Footer></Footer>
          </Route>
          <Route><Redirect to="/seyon123"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
