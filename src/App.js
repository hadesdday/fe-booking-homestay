import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AppProvider from "./context/AppContext";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import ResetPassword from "./pages/Account/ResetPassword";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import HomeDetails from "./pages/HomeDetails";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div
        id={`scrollToTop`}
        className={`${visible && "show"}`}
        onClick={scrollToTop}
      >
        <i className="bx bx-chevrons-up"></i>
      </div>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="/home/details/:id" element={<HomeDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
