import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/FooterFile/Footer.jsx";
import Navigationbar from "./components/NavbarFile/Navigationbar.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigationbar />
    <App />
    <Footer />
  </React.StrictMode>
);
