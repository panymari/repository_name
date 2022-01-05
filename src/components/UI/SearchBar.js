import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './SearchBar.module.scss';

const SearchBar = ({ filteredUsers, searchQuery, setSearchQuery }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hint, setHint] = useState(false);
  const hideOrShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
    setHint(hint);
  };
  return (
    <div className={classes.searchBar}>
      <input
        className={showSearchBar ? classes.showSearchBar : classes.hideSearchBar}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setHint(!hint);
        }}
        placeholder="Search"
        type="text"
        value={searchQuery}
      />
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
      <div className={classes.hint}>
        <div className={showSearchBar && hint ? classes.hintShow : classes.hintHide}>
          {filteredUsers?.map((item) => (
            <Link key={item.id} to={`/user/${item.id}`}>
              <div className={classes.hintItem}>{item.name}</div>
            </Link>
          ))}
        </div>
        {!filteredUsers?.length && <div className={showSearchBar ? classes.nothing : classes.hintHide}>No suers found</div>}
      </div>
    </div>
  );
};
export default SearchBar;
