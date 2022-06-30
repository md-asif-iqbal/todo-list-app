import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="bodys">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>
            <input className="input" type="text" name="txt" placeholder="User name" required="" />
            <input className="input" type="email" name="email" placeholder="Email" required="" />
            <input className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="button">Sign up</button>
          </form>
        </div>

        <div class="login">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Login
            </label>
            <input className="input" type="email" name="email" placeholder="Email" required="" />
            <input className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
