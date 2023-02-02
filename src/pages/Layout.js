import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { MessageContext } from "../cart/index.js";

const Layout = () => {
  const { count } = useContext(MessageContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/forgetpassword">Forgetpassword</Link>
      <Link to="/products">Products</Link>
      {/* <button>CART:</button> {count} */}
      <Link to="/CartItems"><button>CART:</button></Link>{count}
      <Outlet />
    </div>
  );
};

export default Layout;
