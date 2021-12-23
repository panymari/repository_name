import classes from './Header.module.scss';
import { useState, useEffect, useRef } from 'react';

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
  }, [showHeader]);

  return (
    <div className={showHeader ? classes.headerHide : classes.headerShow} ref={headerRef}>
      <div className={classes.leftPart}>
        <div className={classes.logo} />
        <div className={classes.slogan}>Your Learning at IBM</div>
        <div className={classes.angleDownBlock}>
          <div>Recommendations</div>
          <i class="fa fa-angle-down"></i>
          <div className={classes.block}>
            <div>block 1</div>
            <div>block 2</div>
            <div>block 3</div>
          </div>
        </div>
        <div className={classes.angleDownBlock}>
          <div>Learning</div>
          <i class="fa fa-angle-down"></i>
          <div className={classes.block}>
            <div>block 1</div>
            <div>block 2</div>
            <div>block 3</div>
          </div>
        </div>
        <div className={classes.angleDownBlock}>
          <div>Team</div>
          <i class="fa fa-angle-down"></i>
          <div className={classes.block}>
            <div>block 1</div>
            <div>block 2</div>
            <div>block 3</div>
          </div>
        </div>
      </div>

      <div className={classes.rightPart}>
        <div>
          <i class="fa fa-search"></i>
        </div>
        <div>
          <i class="fa fa-question-circle"></i>
        </div>
        <div>
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className={classes.ellipsisIcon}>
          <i class="fa fa-ellipsis-v"></i>
          <i class="fa fa-ellipsis-v"></i>
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
