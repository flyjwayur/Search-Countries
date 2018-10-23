import React from "react";

function ResultSection(props) {

  let { countries, searchInput, searchType} = props;
  let searchInputToLowerCase = searchInput.toLowerCase();
  
  return (
    <section className="resultSection">
      <div className="countryList">
        {searchType ? (
          <div>
            {countries
              .filter(country => country.toLowerCase().startsWith(searchInputToLowerCase))
              .map(country => (
                <div>{country}</div>
              ))}
          </div>
        ) : (
          <div>
            {countries
              .filter(country => country.toLowerCase().startsWith(searchInputToLowerCase))
              .map(country => (
                <div>{country}</div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ResultSection;
