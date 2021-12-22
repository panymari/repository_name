import classes from "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const changeVisabilityHeader = () => {
    if (window.scrollY >= 80) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }
  window.addEventListener('scroll', changeVisabilityHeader);

  return (
    <div className={showHeader ? "header-hide" : "header-show"}>

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
