import React from "react";
import SearchForm from "./SearchForm";
import ResultSection from "./ResultSection";

class SearchSection extends React.Component {
  state = {
    searchInput: "",
    include: true
  }

  handleRadioButton = include => {
    this.setState({
      include
    });
  };

  handleOnChange = e => {
    this.setState({
      searchInput : e.target.value
    });
  };

  render() {
    return (
      <div>
        <section className="searchSection">
          <SearchForm
            searchInput={this.state.searchInput}
            handleRadioButton={this.handleRadioButton}
            handleOnChange={this.handleOnChange}
          />
        </section>
        <ResultSection
          countries = {this.props.countries}
          searchInput={this.state.searchInput}
          searchType={this.state.include}
        />
      </div>
    );
  }
}

export default SearchSection;
