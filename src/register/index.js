import React from "react";
import {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledHeading,
  StyledInput,
} from "./styled";

const Register = () => {
  return (
    <StyledDiv>
      <StyledHeading>Register</StyledHeading>
      <div>
        <StyledForm onSubmit="">
          <StyledInput>
            Username
            <input type="text" name="username" placeholder="username" />
          </StyledInput>

          <StyledInput>
            Email
            <input type="text" name="email" placeholder="email" />
          </StyledInput>

          <StyledInput>
            Password
            <input type="password" name="password" placeholder="password" />
          </StyledInput>

          <StyledInput>
            Confirm Password
            <input
              type="password"
              name="password"
              placeholder="re-enter password"
            />
          </StyledInput>

          <StyledButton onClick={""}>Register</StyledButton>
        </StyledForm>
      </div>
    </StyledDiv>
  );
};

export default Register;
