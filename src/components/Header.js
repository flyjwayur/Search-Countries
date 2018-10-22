import React from "react";

function Header() {
  return (
    <header className="headerSection">
      <h1 className="title">World Countries List</h1>
      <p className="totalNumber">
        Total number of countries <span className="totalNum"/>
      </p>
      <p className="filteredResult" />
    </header>
  );
}

export default Header;