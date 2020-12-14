import React from "react";

import classes from "./searchInput.module.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput() {
  return (
    <div className={classes.divSearch}>
      <form className={classes.formSearch}>
        <select className={classes.selectSearch} name="select">
          <option value="All">All</option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
        <input
          className={classes.inputSearch}
          type="search"
          name="search"
        ></input>
        <button className={classes.buttomSearch} type="submit">
          <SearchIcon fontSize="large" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
