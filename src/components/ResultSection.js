import React from "react";
import {hexaGenerator} from "../utils/hexaGenerator";
import {startsWith, includes} from '../utils/searchFunctions';
import './resultSection.css';

const ResultSection = ({ countries, searchInput,include}) => {

  return (
    <section className="resultSection">
      <div className="countryList">
        {include ? (
          <div>
            {includes(countries, searchInput).map((country,index) => (
                <div className="eachCountry" style={{backgroundColor: hexaGenerator()}} key={index}>{country}</div>
              ))}
          </div>
        ) : (
          <div>
            {startsWith(countries, searchInput).map((country, index) => (
                <div className="eachCountry" style={{backgroundColor: hexaGenerator()}} key={index}>{country}</div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResultSection;
