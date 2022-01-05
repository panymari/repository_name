import React, { useState } from 'react';
import classes from './SearchBar.module.scss';

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const hideOrShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <div className={classes.searchBar}>
      <input className={showSearchBar ? classes.showSearchBar : classes.hideSearchBar} placeholder="Search" type="text" />
      <div
        className={showSearchBar ? classes.hideSearchBarIcon : classes.showSearchBarIcon}
        onClick={hideOrShowSearchBar}
        onKeyDown={hideOrShowSearchBar}
      >
        <i className="fa fa-search" />
      </div>
      <div className={showSearchBar ? classes.showCross : classes.hideCross} onClick={hideOrShowSearchBar} onKeyDown={hideOrShowSearchBar}>
        <i className="fa fa-times" />
      </div>
    </div>
  );
};
export default SearchBar;
