import React from "react";
import {startsWith, includes} from '../utils/searchFunctions';
import './header.css';
//import {startsWith, includes, includesCount} from '../utils/searchFunctions';

function Header({countries, include, searchInput}) {
  return (
    <header className="headerSection">
      <h1 className="title">World Countries List</h1>
      <p className="totalNumText">
        Total number of countries are <span className="totalNum">{countries.length}</span>
      </p>
      {include? 
      <p className="resultText">Countries includes <span className="hightlightResult">"{searchInput}"</span> are 
      <span className="hightlightResult">{includes(countries, searchInput).length}</span></p>
      :
      <p className="resultText">Countries starts with <span className="hightlightResult">"{searchInput}"</span> are 
      <span className="hightlightResult">{startsWith(countries, searchInput).length}</span></p>}
      {/* {includesCount(countries, searchInput)} */}
    </header>
  );
}

export default Header;
