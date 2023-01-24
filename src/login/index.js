import React from "react";
import {
  StyledHeading,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
} from "../register/styled";

const Login = () => {
  return (
    <StyledDiv>
      <StyledHeading>LOGIN</StyledHeading>
      <div>
        <StyledForm>
          <StyledInput>
            Username
            <input type="text" name="username" placeholder="username" />
          </StyledInput>

          <StyledInput>
            Password
            <input type="password" name="password" placeholder="password" />
          </StyledInput>

          <StyledButton onClick={""}>LOGIN</StyledButton>
          {/* <a href="">Forgot Password</a> */}
        </StyledForm>
      </div>
    </StyledDiv>
  );
};

export default Login;
