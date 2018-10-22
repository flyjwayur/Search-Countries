import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchSection from './components/SearchSection'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Header/>
      <SearchSection/>
      </div>
    );
  }
}

export default App;
