import React from "react";
// import "./forget.css"
import {
  StyledHeading,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
} from "../register/styled";

const Forgetpassword = () => {
  return (
    <StyledDiv>
      <StyledHeading>Forgot Password</StyledHeading>
      <div>
        <StyledForm>
          <StyledInput>
            New Password
            <input type="text" name="newpass" placeholder="Password" />
          </StyledInput>

          <StyledInput>
            Confirm Password
            <input
              type="password"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </StyledInput>

          <StyledButton onClick={""}>Submit</StyledButton>
        </StyledForm>
      </div>
    </StyledDiv>
  );
};

export default Forgetpassword;
