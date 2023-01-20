import React from "react";
import "./forget.css"

function Forgetpassword() {
  return (
    <div className="container">
      <h1 id="head">Forget Password</h1>
      <div className="fpassword">
        <label name="password" className="labelname">New Password</label> <br/>
        <input type="text" placeholder="enter new password" className="inputname"></input>
      </div> <br/>
      <div className="rpassword">
        <label name="reset" className="labelname">confirm Password</label> <br/>
        <input type="text" placeholder="enter confirm password" className="inputname"></input>
      </div>
      <div className="buttonok"><button id="buton">Submit</button></div>
    </div>
  );
}

export default Forgetpassword;
