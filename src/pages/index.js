import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgetpassword from "../forgetpassword";
import Login from "../login";
import Register from "../register";
import Home from "./Home";
import NotFound from "./NotFound";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot password" element={<Forgetpassword />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
