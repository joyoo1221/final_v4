import React from "react";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <main>
        <div
          className="hero_single inner_pages author_page jarallax"
          data-jarallax
        >
          <img className="jarallax-img" src="img/hero_general.jpg" alt="" />
          <div
            className="opacity-mask"
            data-opacity-mask="rgba(0, 0, 0, 0.4)"
          ></div>
          {/*<div className="wave hero"></div>*/}
        </div>
        {/*/hero_single*/}

        <div className="container margin_30_40">
          <div className="row">
            <div className="col-lg-12 ps-lg-5">
              <div className="main_title version_2">
                <span>
                  <em></em>
                </span>
                <h2>My Page</h2>
              </div>
              {/*/row*/}
            </div>
            <div className="col-lg-6">
              <div className="main_profile edit_section">
                <div className="author">
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="img/profile.svg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                </div>
                <h1>user_id</h1>
                <ul>
                  <li>
                    <Link to="/editProfile" className="active">
                      <i className="bi bi-person"></i>Edit profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/myPage">
                      <i className="bi bi-gear"></i>Email address
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="bi bi-box-arrow-right"></i>Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-6">
              <div className="main_profile edit_section">
                <div className="row">
                  <div className="col-lg-4 ps-lg-12 author">
                    <div className="author_thumb veryfied">
                      <figure className="ott_logo">
                        <img
                          src="img/profile.svg"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <h1>Netflix</h1>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-lg-12 author">
                    <div className="author_thumb veryfied">
                      <figure>
                        <img
                          src="img/profile.svg"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <h1>Tving</h1>
                    </div>
                  </div>
                  <div className="col-lg-4 ps-lg-12 author">
                    <div className="author_thumb veryfied">
                      <figure>
                        <img
                          src="img/profile.svg"
                          alt=""
                          className="lazy"
                          width="100"
                          height="100"
                        />
                      </figure>
                      <h1>Wavve</h1>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <a href="author-edit-profile.html" className="active">
                      <i className="bi bi-person"></i>Edit profile
                    </a>
                  </li>
                  <li>
                    <a href="account-settings.html">
                      <i className="bi bi-gear"></i>Account settings
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="bi bi-box-arrow-right"></i>Log out
                    </a>
                  </li>
                </ul>
              </div>
              {/*/row*/}
            </div>
          </div>
          {/*/row*/}
          <div className="row">
            <div className="col-lg-12">
              <hr className="mt-3 mb-5"></hr>
              <p className="text-end mt-4">
                <Link to="/editProfile" className="btn_1">
                  Edit Profile
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/*/container*/}
      </main>
      {/*/main*/}

      {/*COMMON SCRIPTS*/}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default MyPage;
