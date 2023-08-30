import backgroundImage from '../images/edu.png';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!loginRequest.emailId) {
      newErrors.emailId = "Email is required";
    }

    // Validate password
    if (!loginRequest.password) {
      newErrors.password = "Password is required";
    }

    // Validate role
    if (loginRequest.role === "0") {
      newErrors.role = "Please select a role";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const loginAction = (e) => {
    e.preventDefault();

    if (validateForm()) {
      fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      })
        .then((result) => {
          console.log("result", result);
          result.json().then((res) => {
            console.log(res);

            if (res.role === "Admin") {
              console.log("Working fine:)");
              sessionStorage.setItem("active-admin", JSON.stringify(res));
            } else if (res.role === "Customer") {
              sessionStorage.setItem("active-user", JSON.stringify(res));
            } else if (res.role === "Delivery") {
              sessionStorage.setItem("active-delivery", JSON.stringify(res));
            } else {
              toast.error("Invalid login credentials. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              return;
            }

            toast.success("Logged in successfully!!!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            navigate("/home");
            window.location.reload(true);
          });
        })
        .catch((error) => {
          console.error("Error during login:", error);
          toast.error("An error occurred during login. Please try again later.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="col-md-6">
        <div
          className="card p-4"
          style={{ background: 'rgba(255, 255, 255, 0.8)' }}
        >
          <div className="card-header text-center">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className={`form-select ${errors.role ? "is-invalid" : ""}`}
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                  <option value="Delivery">Delivery Person</option>
                </select>
                {errors.role && (
                  <div className="invalid-feedback">{errors.role}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.emailId ? "is-invalid" : ""}`}
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                />
                {errors.emailId && (
                  <div className="invalid-feedback">{errors.emailId}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginAction}
              >
                Login
              </button>
              <Link to="/user/register" className="mt-3 d-block text-center">
                Don't have an account? Register here.
              </Link>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
