import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("active-admin")));

  const adminLogout = () => {
    toast.success("Logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    sessionStorage.removeItem("active-admin");
    setUser(null);

    window.location.reload();
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      {user && (
        <li className="nav-item">
          <span className="nav-link active">
            <b className="text-color"> Hi Admin, {user.firstName}</b>
          </span>
        </li>
      )}

      {user && (
        <DropdownButton id="admin-dropdown" title="Admin Options">
          <Dropdown.Item as={Link} to="/addcategory">
            Add Category
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/addbook">
            Add Book
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/user/admin/allorder">
            All Orders
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/deletebook">
            Delete Book
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/deleteUser">
            Delete User
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/user/admin/assigndelivery">
            Assign Order Delivery
          </Dropdown.Item>
        </DropdownButton>
      )}

      {user ? (
        <Link to="/home">
          <li className="nav-item">
            <button className="nav-link active" onClick={adminLogout}>
              <b className="text-color">Logout</b>
            </button>
          </li>
        </Link>
      ) : null}


      <ToastContainer />
    </ul>
  );
};

export default AdminHeader;