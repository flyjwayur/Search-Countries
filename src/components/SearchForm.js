import React from "react";

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
            <div className="startWordContainer">
              <input
                type="radio"
                id="startWord"
                name="radioBtn"
                value="startWord"
                onClick={() => this.handleRadioButton(false)}
              />
              <label htmlFor="startWord" className="radioBtnLabel">
                {" "}
                Starting Word{" "}
              </label>
            </div>
            <div className="anyWordContainer">
              <input
                type="radio"
                id="anyWord"
                name="radioBtn"
                value="anyWord"
                onClick={() => this.handleRadioButton(true)}
              />
              <label htmlFor="anyWord" className="radioBtnLabel">
                {" "}
                Any Word{" "}
              </label>
            </div>
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
