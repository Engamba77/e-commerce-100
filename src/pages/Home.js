import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "../products/prodetails.js";
// import ProfileList from "../products/prolist.js";
import { StyledHeader } from "./styled.js";
import { StyledFooter } from "./styled.js";
import { StyledContent } from "./styled.js";
import { MessageContext } from "../cart/index.js";

const Home = () => {
  const { count } = useContext(MessageContext);
  return (
    <div>
      <StyledHeader>
        Logo
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/forgot password">Forgetpassword</Link>
        <Link to="/prodetails">Products</Link>
        <button>CART{count}</button>
        <button style={{ margin: "10px" }}>CLEAR CART</button>
      </StyledHeader>

      <StyledContent>
        <Profile />
      </StyledContent>

      <Outlet />
      <StyledFooter>Footer</StyledFooter>
    </div>
  );
};

export default Home;
