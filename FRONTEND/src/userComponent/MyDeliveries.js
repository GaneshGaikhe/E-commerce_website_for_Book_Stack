// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";

// const MyDeliveries = () => {
//   const delivery = JSON.parse(sessionStorage.getItem("active-delivery"));
//   const [myOrderData, setMyOrderData] = useState([]);

//   useEffect(() => {
//     const getMyOrder = async () => {
//       const myOrder = await retrieveMyOrder();
//       if (myOrder) {
//         console.log("my order data is present :)");

//         setMyOrderData(myOrder);
//       }
//     };

//     getMyOrder();
//   }, []);

//   const retrieveMyOrder = async () => {
//     const response = await axios.get(
//       "http://localhost:8080/api/user/delivery/myorder?deliveryPersonId=" +
//         delivery.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   return (
//     <div className="mt-3">
//       <div
//         className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="card-header text-center bg-color custom-bg-text">
//           <h2>My Deliveries</h2>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-hover custom-bg-text text-center">
//               <thead className="bg-color table-bordered border-color">
//                 <tr>
//                   <th scope="col">Order Id</th>
//                   <th scope="col">Book</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Description</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Total Price</th>
//                   <th scope="col">Customer Name</th>
//                   <th scope="col">Street</th>
//                   <th scope="col">City</th>
//                   <th scope="col">Pin code</th>
//                   <th scope="col">Mobile No.</th>
//                   <th scope="col">Order Date</th>
//                   <th scope="col">Delivery Date</th>
//                   <th scope="col">Delivery Status</th>
//                   <th scope="col">Delivery Person</th>
//                   <th scope="col">Delivery Mobile No</th>
//                 </tr>
//               </thead>
//               <tbody className="text-color">
//                 {myOrderData.map((orderData) => {
//                   return (
//                     <tr>
//                       <td>
//                         <b>{orderData.orderId}</b>
//                       </td>
//                       <td>
//                         <img
//                           src={
//                             "http://localhost:8080/api/book/" +
//                             orderData.bookImage
//                           }
//                           class="img-fluid"
//                           alt="book_pic"
//                           style={{
//                             maxWidth: "90px",
//                           }}
//                         />
//                       </td>
//                       <td>
//                         <b>{orderData.bookName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.bookDescription}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.quantity}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.totalPrice}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.userName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.address.street}</b>
//                       </td>

//                       <td>
//                         <b>{orderData.address.city}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.address.pincode}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.userPhone}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.orderDate}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryDate}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryStatus}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryPersonName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryPersonContact}</b>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyDeliveries;


import { useState, useEffect } from "react";
import axios from "axios";

const MyDeliveries = () => {
  const delivery = JSON.parse(sessionStorage.getItem("active-delivery"));
  const [myOrderData, setMyOrderData] = useState([]);

  useEffect(() => {
    const getMyOrder = async () => {
      const myOrder = await retrieveMyOrder();
      if (myOrder) {
        console.log("my order data is present :)");
        setMyOrderData(myOrder);
      }
    };

    getMyOrder();
  }, []);

  const retrieveMyOrder = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/delivery/myorder?deliveryPersonId=" +
        delivery.id
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div
        className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
        style={{
          height: "45rem",
        }}
      >
        <div className="card-header text-center bg-primary text-white custom-bg-text">
          <h2>My Deliveries</h2>
        </div>
        <div
          className="card-body"
          style={{
            overflowY: "auto",
          }}
        >
          <div className="table-responsive">
            <table className="table table-hover table-bordered text-center">
              <thead className="bg-primary text-white">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Book</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Street</th>
                  <th scope="col">City</th>
                  <th scope="col">Pin code</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {myOrderData.map((orderData) => (
                  <tr key={orderData.orderId}>
                    <td>{orderData.orderId}</td>
                    <td>
                      <img
                        src={
                          "http://localhost:8080/api/book/" +
                          orderData.bookImage
                        }
                        className="img-fluid"
                        alt="book_pic"
                        style={{
                          maxWidth: "90px",
                        }}
                      />
                    </td>
                    <td>{orderData.bookName}</td>
                    <td>{orderData.bookDescription}</td>
                    <td>{orderData.quantity}</td>
                    <td>{orderData.totalPrice}</td>
                    <td>{orderData.userName}</td>
                    <td>{orderData.address.street}</td>
                    <td>{orderData.address.city}</td>
                    <td>{orderData.address.pincode}</td>
                    <td>{orderData.userPhone}</td>
                    <td>{orderData.orderDate}</td>
                    <td>{orderData.deliveryDate}</td>
                    <td>{orderData.deliveryStatus}</td>
                    <td>{orderData.deliveryPersonName}</td>
                    <td>{orderData.deliveryPersonContact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDeliveries;

