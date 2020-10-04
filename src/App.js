import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Header from './components/Header.js';

class App extends Component {
  
  render(){  
    return (
      <div>
        <Header></Header>
        <Main></Main>     
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
