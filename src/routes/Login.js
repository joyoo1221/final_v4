import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="login_bg" className="dark-theme">
      <div id="login">
        <aside className="">
          <figure>
            <Link to="/mainPage" className="logo_account">
              <img
                src="img/logo.svg"
                alt=""
                width="140"
                height="35"
                className="dark"
              />
              {/*<img*/}
              {/*  src="img/logo-light-mode.svg"*/}
              {/*  alt=""*/}
              {/*  width="140"*/}
              {/*  height="35"*/}
              {/*  className="light"*/}
              {/*/>*/}
            </Link>
          </figure>

          <form>
            <Link to="#0" className="social_bt kakao">
              {/*<div>*/}
              {/*  <img className="kakao_logo" src="img/KakaoTalk_logo.png" />{" "}*/}
              {/*</div>*/}
              <div className="access_social">
                <img
                  className="kakao_logo col-2"
                  src="img/KakaoTalk_logo.png"
                />{" "}
                Start with Kakao
                {/*<a href="#0" className="social_bt google">*/}
                {/*  Login with Google*/}
                {/*</a>*/}
              </div>
            </Link>
            {/*<Link to="#0" className="btn_1 full-width">*/}
            {/*  Login*/}
            {/*</Link>*/}
            <div className="text-center add_top_10">
              New to OTT?{" "}
              <strong>
                <Link to="/#0">Start with Kakao!</Link>
              </strong>
            </div>
          </form>
          <div className="copy">© 2022 OTT</div>
        </aside>
      </div>
      {/*/login */}

      {/*COMMON SCRIPTS */}
      <script src="js/common_scripts.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/common_func.js"></script>
    </div>
  );
};

export default Login;
