import React from 'react';
import {countries} from '../Data/countries'

console.log(countries);

class SearchSection extends React.Component{

  state = {
    searchInput : "",
    include : true
  }

  handleRadioButton = include => {
    this.setState({
      include,
    })
  }

  handleOnKeyUp = e => {
    console.log(e.target.value);
    this.setState({
      searchInput : e.target.value
    })

  }
  render(){
    return(
      <section className="searchSection">
                {this.state.include? <div>{countries.filter(country=>country.startsWith('A')).map(country=><div>{country}</div>)}</div>  : <div>{countries.filter(country=>country.startsWith('B')).map(country=><div>{country}</div>)}</div>}
      <form name="searchForm" className="searchForm">
          <div className="radioBtnWrapper">
              <div className="startWordContainer">
                  <input type="radio" id="startWord" name="radioBtn" value="startWord" onClick={() => this.handleRadioButton(false)}/>
                  <label htmlFor="startWord" className="radioBtnLabel">Starting Word</label>
              </div>
              <div className="anyWordContainer">
                  <input type="radio" id="anyWord" name="radioBtn" value="anyWord" onClick={() => this.handleRadioButton(true)}/>
                  <label htmlFor="anyWord" className="radioBtnLabel">Any Word</label>
              </div>
          </div>
      </form>
      <input className="searchInput" type="text" placeholder="Search Countries :D" onKeyUp={ this.handleOnKeyUp } />
  </section>
    )
  }
}

export default SearchSection;