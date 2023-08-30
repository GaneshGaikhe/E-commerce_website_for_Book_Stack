import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const apiInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

const DeleteBookPage = () => {
  const [myBookData, setMyBookData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(
          categoryId === undefined
            ? "book/all"
            : `book/category?categoryId=${categoryId}`
        );
        setMyBookData(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  const deleteBook = async (id) => {
    try {
      await apiInstance.delete(`book/delete/${id}`);
      // Refresh the book list after deletion
      const updatedBooks = myBookData.filter((book) => book.id !== id);
      setMyBookData(updatedBooks);
    } catch (error) {
      if (error.response) {
        const errorCode = error.response.status;
        console.error(`Error deleting book. Status code: ${errorCode}`);
      } else {
        console.error("Error deleting book:", error.message);
      }
    }
  };

  return (
    <div className="mt-3">
      <div className="card form-card ms-2 me-2 mb-5 rounded-card">
        <div className="card-header text-center bg-primary text-white">
          <h2>Book</h2>
        </div>
        <div className="card-body" style={{ overflowY: "auto" }}>
          <div className="table-responsive">
            <table className="table table-hover text-center">
              <thead className="bg-info text-white">
                <tr>
                  <th scope="col">Book</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {myBookData.map((bookData) => (
                  <tr key={bookData.id}>
                    <td>
                      <img
                        src={`http://localhost:8080/api/book/${bookData.imageName}`}
                        className="img-fluid"
                        alt="book_pic"
                        style={{ maxWidth: "90px" }}
                      />
                    </td>
                    <td>
                      <b>{bookData.title}</b>
                    </td>
                    <td>
                      <b>{bookData.description}</b>
                    </td>
                    <td>
                      <b>{bookData.quantity}</b>
                    </td>
                    <td>
                      <button
                        className="btn bg-danger text-white btn-sm"
                        onClick={() => deleteBook(bookData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer bg-light">
          <div className="float-right"></div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBookPage;
