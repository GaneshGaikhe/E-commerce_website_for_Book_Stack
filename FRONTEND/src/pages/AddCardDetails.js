// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const AddCardDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-user"));
//   const priceToPay = location.state.priceToPay;

//   const [card, setCard] = useState({
//     cardName: "",
//     cardNumber: "",
//     validThrough: "",
//     cvv: "",
//   });

//   const handleCardInput = (e) => {
//     setCard({ ...card, [e.target.name]: e.target.value });
//   };

//   const payAndOrder = () => {
//     fetch("http://localhost:8080/api/user/order?userId=" + user.id, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     }).then((result) => {
//       console.log("result", result);
//       result.json().then((res) => {
//         console.log(res);

        
//       });
//     });
//   };

//   const payForOrder = () => {
//     payAndOrder();
//     toast.success("Books Ordered Sucessfully!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     navigate("/home");
//   };

//   return (
//     <div>
//       <div class="mt-2 d-flex aligns-items-center justify-content-center">
//         <div class="card form-card border-color" style={{ width: "25rem" }}>
//           <div className="card-header bg-color custom-bg-text">
//             <h5 class="card-title text-center">Payment Details</h5>
//           </div>
//           <div class="card-body text-color custom-bg">
//             <form onSubmit={payForOrder}>
//               <div class="mb-3">
//                 <label for="name" class="form-label">
//                   <b> Name on Card</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="name"
//                   name="cardName"
//                   onChange={handleCardInput}
//                   value={card.cardName}
//                   required
//                 />
//               </div>
//               <div class="mb-3">
//                 <label for="cardNumber" class="form-label">
//                   <b> Card Number</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cardNumber"
//                   name="cardNumber"
//                   onChange={handleCardInput}
//                   value={card.cardNumber}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="validThrough" class="form-label">
//                   <b>Valid Through</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="validThrough"
//                   name="validThrough"
//                   onChange={handleCardInput}
//                   value={card.validThrough}
//                   required
//                 />
//               </div>

//               <div class="mb-3">
//                 <label for="cvv" class="form-label">
//                   <b>CVV</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="cvv"
//                   name="cvv"
//                   onChange={handleCardInput}
//                   value={card.cvv}
//                   required
//                 />
//               </div>

//               <input
//                 type="submit"
//                 class="btn custom-bg-text bg-color"
//                 value={"Pay Rs" + priceToPay}
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCardDetails;



import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const priceToPay = location.state.priceToPay;

  const [card, setCard] = useState({
    cardName: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleCardInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const validateCard = () => {
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const today = new Date(); // Get the current date

    let isValid = true;

    if (!card.cardName) {
      isValid = false;
      toast.error("Name on Card is required");
    }

    if (!card.cardNumber.match(cardNumberRegex)) {
      isValid = false;
      toast.error("Card Number must be 16 digits");
    }

    if (!card.validThrough) {
      isValid = false;
      toast.error("Valid Through is required");
    } else {
      const inputDate = new Date(card.validThrough);
      if (inputDate < today) {
        isValid = false;
        toast.error("Your Card is expired!!!!");
      }
    }

    if (!card.cvv.match(cvvRegex)) {
      isValid = false;
      toast.error("CVV must be 3 digits");
    }

    return isValid;
  };

  const payAndOrder = () => {
    if (validateCard()) {
      fetch("http://localhost:8080/api/user/order?userId=" + user.id, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((result) => {
        console.log("result", result);
        result.json().then((res) => {
          console.log(res);
        });
      });
    }
  };

  const payForOrder = (e) => {
    e.preventDefault();

    if (validateCard()) {
      payAndOrder();
      toast.success("Books Ordered Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/home");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="card-title">Payment Details</h5>
            </div>
            <div className="card-body">
              <form onSubmit={payForOrder}>
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">
                    <span className="text-danger">*</span> Name on Card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardName"
                    name="cardName"
                    onChange={handleCardInput}
                    value={card.cardName}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    <span className="text-danger">*</span> Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    onChange={handleCardInput}
                    value={card.cardNumber}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="validThrough" className="form-label">
                    <span className="text-danger">*</span> Valid Through (YYYY-MM-DD)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validThrough"
                    name="validThrough"
                    onChange={handleCardInput}
                    value={card.validThrough}
                    required
                    placeholder="YYYY-MM-DD"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">
                    <span className="text-danger">*</span> CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    onChange={handleCardInput}
                    value={card.cvv}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Pay Rs {priceToPay}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddCardDetails;
