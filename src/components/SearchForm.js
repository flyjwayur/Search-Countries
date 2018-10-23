import React from "react";
import RadioButtons from "./RadioButtons";
import './searchForm.css';

const SearchForm = ({handleRadioButton, handleOnChange}) => {

    return (
      <section className="searchSection">
        <form name="searchForm" className="searchForm">
          <div className="radioBtnWrapper">
          <RadioButtons id="startWord" value="startWord" onClickHandler={() => handleRadioButton(false)} labelText="Starting Word"/>
          <RadioButtons id="anyWord" value="anyWord" onClickHandler={() => handleRadioButton(true)} labelText="Any Word" />
          </div>
        </form>
        <input
          className="searchInput"
          type="text"
          placeholder="Search Countries :D"
          onKeyUp={handleOnChange}
        />
      </section>
    );
}

export default SearchForm;
