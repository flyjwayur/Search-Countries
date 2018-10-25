import React from "react";
import { hexaGenerator } from "../utils/hexaGenerator";
import { startsWith, includes } from "../utils/searchFunctions";
import "./resultSection.css";

const ResultSection = ({ countries, searchInput, include }) => {
  const checkLengthCountries = () => {
    let lengthCountries = include
      ? includes(countries, searchInput).length
      : startsWith(countries, searchInput).length;
    console.log(lengthCountries);
    return lengthCountries > 0 ? true : false;
  };
  checkLengthCountries();

  return (
    <section className="resultSection">
      <div className="countryList">
        {checkLengthCountries() ? (
          include ? (
            <div>
              {includes(countries, searchInput).map((country, index) => (
                <div
                  className="eachCountry"
                  style={{ backgroundColor: hexaGenerator() }}
                  key={index}
                >
                  {country}
                </div>
              ))}
            </div>
          ) : (
            <div>
              {startsWith(countries, searchInput).map((country, index) => (
                <div
                  className="eachCountry"
                  style={{ backgroundColor: hexaGenerator() }}
                  key={index}
                >
                  {country}
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="noResult">
            {" "}
            <div>^ - ^</div>
            <p>There is no result</p>{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResultSection;
