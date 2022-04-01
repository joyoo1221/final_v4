import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header_in clearfix element_to_stick">
        <div className="layer" />
        {/*Opacity Mask Menu Mobile*/}
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img
                src="img/logo.svg"
                alt=""
                width="140"
                height="35"
                className="dark"
              />
              {/*<img src="img/logo-light-mode.svg" alt="" width="140" height="35" className="light" />*/}
            </a>
          </div>
          {/*<ul className="top_menu">*/}
          {/*    <li>*/}
          {/*        <span className="color_mode_bt">*/}
          {/*            <input id="theme_toggle" type="checkbox" name="theme_toggle"/>*/}
          {/*            /!*<label htmlFor="theme_toggle"></label>*!/*/}
          {/*        </span>*/}
          {/*    </li>*/}
          {/*    <li><a href="login.html" className="btn_access">Log In</a></li>*/}
          {/*</ul>*/}
          {/*/top_menu*/}
          <Link to="#0" className="open_close">
            <i className="bi bi-list" />
            <span>Menu</span>
          </Link>
          <nav className="main-menu">
            <div id="header_menu">
              <Link to="#0" className="open_close">
                <i className="bi bi-x" />
              </Link>
              <Link to="index.html" className="logo_menu">
                <img
                  src="img/logo-placeholder.png"
                  // data-src="img/logo.svg"
                  alt=""
                  width="120"
                  height="30"
                  className="dark lazy"
                />
                <img
                  src="img/logo-placeholder.png"
                  // data-src="img/logo-light-mode.svg"
                  alt=""
                  width="120"
                  height="30"
                  className="light lazy"
                />
              </Link>
            </div>
            <ul>
              <li className="submenu">
                <Link to="/mainPage" className="show-submenu">
                  Home
                </Link>
              </li>
              <li className="submenu">
                <Link to="/recoPage" className="show-submenu">
                  Explore
                </Link>
              </li>
              <li className="submenu">
                <Link to="/likePage" className="show-submenu">
                  Like
                </Link>
              </li>
              <li className="submenu">
                <Link to="/myPage" className="show-submenu">
                  My page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*/header*/}
    </div>
  );
};

export default Header;
