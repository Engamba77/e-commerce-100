import React from "react";

function Forgetpassword() {
  

  return 
  <div className="container">
    <h1>Forget Password</h1>
    <div className="fpassword">
      <label name="password">New Password</label>
    <input type="text" placeholder="enter your password"></input>
    </div>
    <div className="rpassword">
      <label name="reset">confirm Password</label>
      <input type="text" placeholder="enter reset password"></input>
    </div>
    
  </div>;
}

export default Forgetpassword;
