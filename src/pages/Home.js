import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MessageContext } from "../cart/index.js";
import { StyledHeader } from "./styled.js";

const Home = () => {
  const { count } = useContext(MessageContext);
  return (
    <div>
      Logo
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/forgetpassword">Forgetpassword</Link>
      <Link to="/productList">Products</Link>
      <button>CART:</button> {count}
      <button style={{ margin: "10px" }}>CLEAR CART</button>
      <Outlet />
    </div>
  );
};

export default Home;
