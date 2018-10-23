import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import SearchSection from './components/SearchSection'
import { countries } from "./data/countries";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <Header/>
      <SearchSection countries={countries}/>
      </div>
    );
  }
}

export default App;
