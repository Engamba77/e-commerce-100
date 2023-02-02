import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgetpassword from "../forgetpassword";
import Login from "../login";
import ProductList from "../products/productList";
import Register from "../register";
import Layout from "./Layout";
import NotFound from "./NotFound";
import Home from "./Home";
import CartItems from "../cart/CartItems";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/CartItems" element={<CartItems />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
