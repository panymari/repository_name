import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './SearchBar.module.scss';

const SearchBar = ({ filteredUsers, searchQuery, setSearchQuery }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [hint, setHint] = useState(false);
  const hideAll = () => {
    setShowSearchBar(!showSearchBar);
    setHint(hint);
    setSearchQuery('');
  };
  return (
    <div className={classes.searchBar}>
      <input
        className={showSearchBar ? classes.showSearchBar : classes.hideSearchBar}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setHint(Boolean(e.target.value.trim()));
        }}
        placeholder="Search"
        type="text"
        value={searchQuery}
      />
      <button className={showSearchBar ? classes.showCross : classes.hideCross} onClick={hideAll} onKeyDown={hideAll}>
        <i className="fa fa-times" />
      </button>
      <button className={showSearchBar ? classes.hideSearchBarIcon : classes.showSearchBarIcon} onClick={hideAll} onKeyDown={hideAll}>
        <i className="fa fa-search" />
      </button>
      <div className={classes.hint}>
        <div className={showSearchBar && hint ? classes.hintShow : classes.hintHide}>
          {filteredUsers?.map((item) => (
            <Link key={item.id} to={`/user/${item.id}`}>
              <div className={classes.hintItem} key={item.id}>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        {!filteredUsers?.length && <div className={showSearchBar ? classes.nothing : classes.hintHide}>No suers found</div>}
      </div>
    </div>
  );
};
export default SearchBar;
