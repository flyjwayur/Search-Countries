import React from "react";
import { countries } from "../Data/countries";
import SearchForm from "./SearchForm";

console.log(countries);

class SearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      include: true
    };
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleRadioButton = include => {
    this.setState({
      include
    });
  };

  handleOnChange = searchInput => {
    this.setState({
      searchInput,
    });
  }

  render() {
    return (
      <section className="searchSection">
        {this.state.include ? (
          <div>
            {countries
              .filter(country => country.startsWith("A"))
              .map(country => (
                <div>{country}</div>
              ))}
          </div>
        ) : (
          <div>
            {countries
              .filter(country => country.startsWith("B"))
              .map(country => (
                <div>{country}</div>
              ))}
          </div>
        )}
        <SearchForm
          searchInput={this.state.searchInput}
          searchType={this.state.include}
          handleRadioButton={this.handleRadioButton}
          handleOnChange={this.handleOnChange}
        />
      </section>
    );
  }
}

export default SearchSection;
