import React from "react";
import SearchForm from "./SearchForm";
import ResultSection from "./ResultSection";

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
      searchInput
    });
  };

  render() {
    return (
      <div>
        <section className="searchSection">
          <SearchForm
            searchInput={this.state.searchInput}
            searchType={this.state.include}
            handleRadioButton={this.handleRadioButton}
            handleOnChange={this.handleOnChange}
          />
        </section>
        <ResultSection
          countries = {this.props.countries}
          searchInput={this.state.searchInput}
          searchType={this.state.include}
          handleRadioButton={this.handleRadioButton}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default SearchSection;
