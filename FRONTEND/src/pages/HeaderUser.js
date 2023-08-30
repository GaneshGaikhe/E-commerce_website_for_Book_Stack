import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../images/e_logo.gif";
const HeaderUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("active-user"));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const userLogout = () => {
    toast.success("Logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-user");
    window.location.reload(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="customer-name">
          Welcome, {user.firstName} {user.lastName}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            dropdownOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/user/mycart">
              <img
            src={logo}
            width="32"
            height="center"
            className="d-inline-block align-top"
            alt=""
          /> Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/myorder">
                My Order
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={userLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default HeaderUser;
