import React from "react";
import RadioButtons from "./RadioButtons"

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadioButton = this.handleRadioButton.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleRadioButton = bool => {
    this.props.handleRadioButton(bool);
  };

  handleOnChange = e => {
    this.props.handleOnChange(e.target.value);
  };

  render() {
    return (
      <div>
        <form name="searchForm" className="searchForm">
          <div className="radioBtnWrapper">
          <RadioButtons id="startWord" value="startWord" onClickHandler={() => this.handleRadioButton(false)}  labelText="Starting Word"/>
          <RadioButtons id="anyWord" value="anyWord" onClickHandler={() => this.handleRadioButton(true)} labelText="Any Word" />
          </div>
        </form>
        <input
          className="searchInput"
          type="text"
          placeholder="Search Countries :D"
          value={this.props.searchInput}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default SearchForm;
