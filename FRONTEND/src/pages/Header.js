// import { Link } from "react-router-dom";
// import RoleNav from "./RoleNav";
// import logo from "../images/e_logo.gif";

// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar  navbar-expand-lg custom-bg text-color">
//         <div class="container-fluid text-color">
//           <img
//             src={logo}
//             width="50"
//             height="50"
//             class="d-inline-block align-top"
//             alt=""
//           />
//           <Link to="/" class="navbar-brand">
//             <i>
//               <b className="text-color">MyBookStore</b>
//             </i>
//           </Link>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link to="/about" class="nav-link active" aria-current="page">
//                   <b className="text-color">About Us</b>
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link to="/contact" class="nav-link active" aria-current="page">
//                   <b className="text-color">Contact Us</b>
//                 </Link>
//               </li>
//             </ul>

//             <RoleNav />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

/////////////////////////

// import { Link } from "react-router-dom";
// import RoleNav from "./RoleNav";
// import logo from "../images/e_logo.gif";

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link to="/" className="navbar-brand">
//           <img
//             src={logo}
//             width="50"
//             height="50"
//             className="d-inline-block align-top"
//             alt=""
//           />
//           <span className="ms-2 h4">MyBookStore</span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">
//                 <b>About Us</b>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link">
//                 <b>Contact Us</b>
//               </Link>
//             </li>
//           </ul>
          
//           <RoleNav />

//           <div className="d-flex align-items-center">
//             <Link to="/user/register" className="btn btn-light me-2">
//               <b>Register</b>
//             </Link>
//             <Link to="/user/login" className="btn btn-outline-light">
//               <b>Login</b>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/112-book-morph.gif";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="ms-2 h4">MyBookStore</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <b>About Us</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <b>Contact Us</b>
              </Link>
            </li>
          </ul>

          <RoleNav />

          {/* Registration and Login Buttons */}
          {/* Uncomment and modify as needed */}
          {/* <div className="d-flex align-items-center">
            <Link to="/user/register" className="btn btn-light me-2">
              <b>Register</b>
            </Link>
            <Link to="/user/login" className="btn btn-outline-light">
              <b>Login</b>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;

