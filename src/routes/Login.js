import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div id="login">
        <aside>
          <figure>
            <Link to="mainPage" className="logo_account">
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
            <div className="access_social">
              <Link to="#0" className="social_bt facebook">
                Login with Facebook
              </Link>
              {/*<Link href="#0" className="social_bt google">Login with Google</Link>*/}
            </div>
            <div className="divider">
              <span>Or</span>
            </div>
            <div className="form-group mb-3">
              {/*<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>*/}
            </div>
            <div className="form-group">
              {/*<input type="password" className="form-control" name="password" id="password" value="" placeholder="Password"/>*/}
            </div>
            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-start">
                <label className="container_check">
                  Remember me
                  {/*<input type="checkbox">*/}
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="float-end">
                <Link id="forgot" to="javascript:void(0);">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Link to="#0" className="btn_1 full-width">
              Login
            </Link>
            <div className="text-center add_top_10">
              New to OTT?{" "}
              <strong>
                <Link to="register.html">Start with Kakao!</Link>
              </strong>
            </div>
          </form>
          <div className="copy">© 2022 OTT</div>
        </aside>
      </div>
    </div>
  );
};

export default Login;
