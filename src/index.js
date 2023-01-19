import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Forgetpassword from "./forgetpassword";
import "./index.css";
import Register from "./register";
import Login from "./login";
import Forgetpassword from "./forgetpassword";
import Prodetails from "./products/prodetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Register />
    <Login />
    <Forgetpassword />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
