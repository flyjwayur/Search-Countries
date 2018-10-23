import React from "react";
import {startsWith, includes} from '../utils/searchFunctions';
//import {startsWith, includes, includesCount} from '../utils/searchFunctions';

function Header({countries, include, searchInput}) {
  return (
    <header className="headerSection">
      <h1 className="title">World Countries List</h1>
      {include? 
      <h2>Countries includes <span className="resultSpan">{searchInput}</span> are 
      <span className="resultSpan">{includes(countries, searchInput).length}</span></h2>
      :
      <h2>Countries starts with <span className="resultSpan">{searchInput}</span> are 
      <span className="resultSpan">{startsWith(countries, searchInput).length}</span></h2>}
      {/* {includesCount(countries, searchInput)} */}
      <p className="totalNumber">
        Total number of countries <span className="totalNum">{countries.length}</span>
      </p>
      <p className="filteredResult" />
    </header>
  );
}

export default Header;
