
import { useRef } from 'react';
import classes from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const headerRef = useRef();

  const changeVisibilityHeader = () => {
    console.log(headerRef);
    if (window.scrollY >= headerRef.current.clientHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }


  window.removeEventListener('scroll', changeVisibilityHeader);
  window.addEventListener('scroll', changeVisibilityHeader);

  return (
    <div className={showHeader ? classes.headerHide : classes.headerShow} ref={headerRef}>

      <div className="left-part">
        <div className="logo" />
        <div className="slogan">Your Learning at IBM</div>
        <div className="angle-down-block">
          <div
            onMouseEnter={() => setShowBlock(true)}
            onMouseLeave={() => setShowBlock(false)}>
            Recommendations
          </div>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="angle-down-block">
          <div>Learning</div>
          <i class="fa fa-angle-down"></i>
        </div>
        <div className="angle-down-block">
          <div>Team</div>
          <i class="fa fa-angle-down"></i>
        </div>
      </div>

      <div className="right-part">
        <div><i class="fa fa-search"></i></div>
        <div><i class="fa fa-question-circle"></i></div>
        <div><i class="fa fa-user" aria-hidden="true"></i></div>
        <div className="ellipsis-icon">
          <i class="fa fa-ellipsis-v"></i>
          <i class="fa fa-ellipsis-v"></i>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>

    </div>
  );
}
export default Header;
