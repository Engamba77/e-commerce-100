import React from "react";

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <label>
          Username:
          <input type="text" name="username" placeholder="username" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" placeholder="password" />
        </label>
      </div>
      <div>
        <button>LOGIN</button>
        <a href="">Forgot Password</a>
      </div>
    </div>
  );
};

export default Login;
