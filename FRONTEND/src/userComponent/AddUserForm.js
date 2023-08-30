// import { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const AddUserForm = () => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     password: "",
//     phoneNo: "",
//     street: "",
//     city: "",
//     pincode: "",
//     role: "",
//   });

//   const handleUserInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const clearForm = () => {
//     setUser({
//       firstName: "",
//       lastName: "",
//       emailId: "",
//       password: "",
//       phoneNo: "",
//       street: "",
//       city: "",
//       pincode: "",
//       role: "",
//     });
//   };

//   const saveUser = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:8080/api/user/register", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((result) => {
//         toast.success("Registered Successfully!!!", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         result
//           .json()
//           .then((res) => {
//             console.log("response", res);
//             clearForm(); // Clear the form after a successful submission
//           })
//           .catch((error) => {
//             console.log("******", error);
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
//         <div
//           className="card form-card border-color text-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color custom-bg-text text-center">
//             <h5 className="card-title">Add User</h5>
//           </div>
//           <div className="card-body">
//             <form onSubmit={saveUser}>
//               <div className="mb-3 text-color">
//                 <label htmlFor="role" className="form-label">
                 
//                 </label>
                
//               </div>

//               <form onSubmit={saveUser}>
//               <div class="mb-3 text-color">
//                 <label for="role" class="form-label">
//                   <b>User Role</b>
//                 </label>
//                 <select
//                   onChange={handleUserInput}
//                   className="form-control"
//                   name="role"
//                 >
//                   <option value="0">Select Role</option>
//                   <option value="Admin"> Admin </option>
//                   <option value="Customer"> Customer </option>
//                   <option value="Delivery"> Delivery Person </option>
//                 </select>
//               </div>

//               <div class="mb-3 text-color">
//                 <label for="title" class="form-label">
//                   <b> First Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="firstName"
//                   name="firstName"
//                   onChange={handleUserInput}
//                   value={user.firstName}
//                 />
//               </div>
//               <div class="mb-3 text-color">
//                 <label for="description" class="form-label">
//                   <b>Last Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="lastName"
//                   name="lastName"
//                   onChange={handleUserInput}
//                   value={user.lastName}
//                 />
//               </div>

//               <div className="mb-3 text-color">
//                 <b>
//                   <label className="form-label">Email Id</label>
//                 </b>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={user.emailId}
//                 />
//               </div>

//               <div class="mb-3 mt-1">
//                 <label for="quantity" class="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={user.password}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="price" class="form-label">
//                   <b>Mobile No</b>
//                 </label>
//                 <input
//                   type="number"
//                   class="form-control"
//                   id="phoneNo"
//                   name="phoneNo"
//                   onChange={handleUserInput}
//                   value={user.phoneNo}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="description" class="form-label">
//                   <b> Street</b>
//                 </label>
//                 <textarea
//                   class="form-control"
//                   id="street"
//                   name="street"
//                   rows="3"
//                   onChange={handleUserInput}
//                   value={user.street}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="price" class="form-label">
//                   <b>City</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="city"
//                   name="city"
//                   onChange={handleUserInput}
//                   value={user.city}
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="pincode" class="form-label">
//                   <b>Pincode</b>
//                 </label>
//                 <input
//                   type="number"
//                   class="form-control"
//                   id="pincode"
//                   name="pincode"
//                   onChange={handleUserInput}
//                   value={user.pincode}
//                 />
//               </div>

        

//               <ToastContainer />
//             </form>

//               <input
//                 type="submit"
//                 className="btn bg-color custom-bg-text"
//                 value="Register User"
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUserForm;













import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../images/education.png"; // Import your background image

const AddUserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
  });

  const [isPhoneValid, setIsPhoneValid] = useState(true); // Initial state is true

  const [fieldErrors, setFieldErrors] = useState({}); // Error messages for fields

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === "phoneNo") {
      // Validate phone number
      const phoneNumber = e.target.value;
      const isValid = /^\d{10}$/.test(phoneNumber); // Use a regular expression to check if it's a valid 10-digit number
      setIsPhoneValid(isValid);
    }
  };

  const clearForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      phoneNo: "",
      street: "",
      city: "",
      pincode: "",
      role: "",
    });
    setFieldErrors({});
  };

  const saveUser = (event) => {
    event.preventDefault();
    if (!isPhoneValid) {
      toast.error("Please enter a valid 10-digit phone number.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return; // Stop the form submission if phone number is invalid
    }

    // Check if any required field is empty before submitting
    const requiredFields = ["firstName", "lastName", "emailId", "password", "phoneNo", "street", "city", "pincode", "role"];
    let hasError = false;
    const errors = {};

    requiredFields.forEach((field) => {
      if (!user[field]) {
        hasError = true;
        errors[field] = `Please enter a value for ${field}.`;
      }
    });

    setFieldErrors(errors);

    if (hasError) {
      return; // Stop the form submission if any required field is empty
    }

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        toast.success("Registered Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        result
          .json()
          .then((res) => {
            console.log("response", res);
            clearForm(); // Clear the form after a successful submission
          })
          .catch((error) => {
            console.log("******", error);
            console.log(error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`, // Use the imported background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Set a minimum height to cover the entire viewport
  };

  return (
    <div className="container-fluid p-0" style={backgroundImageStyle}>
      <div className="d-flex align-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="card form-card border-color text-color custom-bg"
          style={{ width: "25rem", background: "rgba(255, 255, 255, 0.8)" }}
        >
          <div className="card-header bg-primary custom-bg-text text-center">
            <h5 className="card-title">Add User</h5>
          </div>
          <div className="card-body">
            <form onSubmit={saveUser}>
              <div className="mb-3 text-color">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className={`form-control ${fieldErrors["role"] ? "is-invalid" : ""}`}
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Customer">Customer</option>
                  <option value="Delivery">Delivery Person</option>
                </select>
                {fieldErrors["role"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["role"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="firstName" className="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  className={`form-control ${fieldErrors["firstName"] ? "is-invalid" : ""}`}
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
                {fieldErrors["firstName"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["firstName"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="lastName" className="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  className={`form-control ${fieldErrors["lastName"] ? "is-invalid" : ""}`}
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
                {fieldErrors["lastName"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["lastName"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <b>
                  <label className="form-label">Email Id</label>
                </b>
                <input
                  type="email"
                  className={`form-control ${fieldErrors["emailId"] ? "is-invalid" : ""}`}
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
                {fieldErrors["emailId"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["emailId"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className={`form-control ${fieldErrors["password"] ? "is-invalid" : ""}`}
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
                {fieldErrors["password"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["password"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="phoneNo" className="form-label">
                  <b>Mobile No</b>
                </label>
                <input
                  type="text"
                  className={`form-control ${!isPhoneValid || fieldErrors["phoneNo"] ? "is-invalid" : ""}`}
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleUserInput}
                  value={user.phoneNo}
                />
                {fieldErrors["phoneNo"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["phoneNo"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="street" className="form-label">
                  <b>Street</b>
                </label>
                <textarea
                  className={`form-control ${fieldErrors["street"] ? "is-invalid" : ""}`}
                  id="street"
                  name="street"
                  rows="3"
                  onChange={handleUserInput}
                  value={user.street}
                />
                {fieldErrors["street"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["street"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="city" className="form-label">
                  <b>City</b>
                </label>
                <input
                  type="text"
                  className={`form-control ${fieldErrors["city"] ? "is-invalid" : ""}`}
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
                {fieldErrors["city"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["city"]}
                  </div>
                )}
              </div>

              <div className="mb-3 text-color">
                <label htmlFor="pincode" className="form-label">
                  <b>Pincode</b>
                </label>
                <input
                  type="number"
                  className={`form-control ${fieldErrors["pincode"] ? "is-invalid" : ""}`}
                  id="pincode"
                  name="pincode"
                  onChange={handleUserInput}
                  value={user.pincode}
                />
                {fieldErrors["pincode"] && (
                  <div className="invalid-feedback">
                    {fieldErrors["pincode"]}
                  </div>
                )}
              </div>

              <input
                type="submit"
                className="btn bg-color custom-bg-text"
                value="Register User"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;



