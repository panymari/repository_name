import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../UI/SearchBar';
import classes from './Header.module.scss';
import useUsers from '../../hooks/useUsers';
import LogIn from '../../auth/LogIn';
import LogOut from '../../auth/LogOut';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const headerRef = useRef();
  const { users = [] } = useUsers();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    if (searchQuery) {
      const usersFiltered = users.filter((item) => {
        const userName = item.name.toLowerCase();
        return userName.includes(searchQuery.trim().toLowerCase());
      });
      setFilteredUsers(usersFiltered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const changeVisibilityHeader = () => {
    if (window.scrollY >= headerRef.current.clientHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => window.requestAnimationFrame(changeVisibilityHeader));

    return () => window.removeEventListener('scroll', () => window.cancelAnimationFrame(changeVisibilityHeader));
  }, []);

  return (
    <div className={showHeader ? classes.headerHide : classes.headerShow} ref={headerRef}>
      <div className={classes.leftPart}>
        <div className={classes.logo} />
        <div className={classes.slogan}>Your Learning at IBM</div>
        <div className={classes.angleDownBlock}>
          <div>Recommendations</div>
          <i className="fa fa-angle-down" />
          <div className={classes.block}>
            <div>block 1</div>
            <div>block 2</div>
            <div>block 3</div>
          </div>
        </div>
        <div className={classes.angleDownBlock}>
          <div>Learning</div>
          <i className="fa fa-angle-down" />
          <div className={classes.block}>
            <div>block 1</div>
            <div>block 2</div>
            <div>block 3</div>
          </div>
        </div>
        <div className={classes.angleDownBlock}>
          <div>Team</div>
          <i className="fa fa-angle-down" />
          <div className={classes.block}>
            <div className={classes.link}>
              <Link to="/users">Users</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.rightPart}>
        <SearchBar filteredUsers={filteredUsers} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button className={classes.questionIcon}>
          <i className="fa fa-question-circle" />
        </button>
        <button className={classes.userIcon}>
          <i aria-hidden="true" className="fa fa-user" />
          <div className={classes.block}>
            <LogIn />
            <LogOut />
          </div>
        </button>
        <div className={classes.additions}>
          <button className={classes.ellipsisIcon}>
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
            <i className="fa fa-ellipsis-v" />
          </button>
          <div className={classes.angleDownBlock__mobile}>
            <div>
              <div>Recommendations</div>
              <div className={classes.block__mobile}>
                <div>block 1</div>
                <div>block 2</div>
                <div>block 3</div>
              </div>
            </div>
            <div>
              <div>Learning</div>
              <div className={classes.block__mobile}>
                <div>block 1</div>
                <div>block 2</div>
                <div>block 3</div>
              </div>
            </div>
            <div>
              <div>Team</div>
              <div className={classes.block__mobile}>
                <Link to="/users">Users</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
