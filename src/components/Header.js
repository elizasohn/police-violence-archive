import React from "react";
import header from '../css/header.css'

const Header = () => {
  return (
    <div className="headerWrapper">


      <div className="headerTextWrapper">
        <h1 className="headerText">Police Violence Archive</h1>
      </div>

      <div className="searchBarWrapper">
        <input
          className="searchBarInput"
          type="search"
          // value={}
          // onChange={}
        />
      </div>


    </div>
  );
};

export default Header;
