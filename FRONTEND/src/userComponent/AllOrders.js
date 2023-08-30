import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const AllOrders = () => {
  const [allOrderData, setAllOrderData] = useState([]);

  useEffect(() => {
    const getAllOrder = async () => {
      const allOrder = await retrieveAllOrder();
      if (allOrder) {
        setAllOrderData(allOrder);
      }
    };

    getAllOrder();
  }, []);

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/admin/allorder"
    );
    console.log(response.data);
    return response.data;
  };

  return (
    <div className="mt-3">
      <div className="card form-card ms-2 me-2 mb-5 custom-bg border-color rounded-card">
        <div className="card-header custom-bg-text text-center bg-primary">
          <h2 className="mb-0">All Orders</h2>
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <div className="table-responsive">
            <table className="table table-hover text-dark text-center">
              <thead className="table-bordered border-color bg-info custom-bg-text">
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
                {allOrderData.map((orderData) => (
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
                        style={{ maxWidth: "90px" }}
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

export default AllOrders;
