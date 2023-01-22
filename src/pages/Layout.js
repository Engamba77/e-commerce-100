import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        Logo
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/forgot password">Forgetpassword</Link>
      </header>
      <div></div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
