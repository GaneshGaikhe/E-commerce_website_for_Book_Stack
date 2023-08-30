// const ContactUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>
//         Ganesh Gaikhe Mail ID - ganesh2000gaikhe@gmail.com
//         <br />
//         <br />
//         Dhnaraj chavan Mail ID - Samrat1@gmail.com
//         <br />
//         <br />
//         Ganesh Gaikhe
//         <br />
//         <br />
//         Dhnaraj chavan
//       </b>
//     </div>
//   );
// };

// export default ContactUs;



// import React from "react";

// const ContactUs = () => {
//   const containerStyle = {
//     minHeight: "100vh", // Set the minimum height to 100% of viewport height
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <div className="container-fluid" style={containerStyle}>
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="bg-light p-4">
//             <h2>Contact Us</h2>
//             <p>For any inquiries, please feel free to reach out to us:</p>
//             <ul className="list-unstyled">
//               <li>
//                 <strong>Ganesh Gaikhe</strong>
//                 <br />
//                 Email: ganesh2000gaikhe@gmail.com
//               </li>
//               <li className="mt-3">
//                 <strong>Dharnaj Chavan</strong>
//                 <br />
//                 Email: Samrat1@gmail.com
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import React from "react";
import backgroundImage from "../images/abc.jpg"; // Replace with the actual path to your background image

const ContactUs = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${backgroundImage})`, // Use the imported image variable
    backgroundSize: "cover",
  };

  const cardStyle = {
    width: "150%",
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="bg-light p-4" style={cardStyle}>
            <h2>Contact Us</h2>
            <p>For any inquiries, please feel free to reach out to us:</p>
            <ul className="list-unstyled">
              <li>
                <strong>Ganesh Gaikhe</strong>
                <br />
                Email: ganesh2000gaikhe@gmail.com
              </li>
              <li className="mt-3">
                <strong>Dharnaj Chavan</strong>
                <br />
                Email: dhanrajchavan2000@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


