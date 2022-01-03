import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../UI/SearchBar';
import classes from './Header.module.scss';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  const headerRef = useRef();

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
        <SearchBar />
        <div>
          <i className="fa fa-question-circle" />
        </div>
        <div>
          <i aria-hidden="true" className="fa fa-user" />
        </div>
        <div className={classes.ellipsisIcon}>
          <i className="fa fa-ellipsis-v" />
          <i className="fa fa-ellipsis-v" />
          <i className="fa fa-ellipsis-v" />
        </div>
      </div>
    </div>
  );
};
export default Header;
