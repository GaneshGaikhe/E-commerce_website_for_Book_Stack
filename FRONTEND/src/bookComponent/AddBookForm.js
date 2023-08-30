import React, { useState, useEffect } from "react";
import axios from "axios";

const AddBookForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    categoryId: "",
  });

  const retrieveAllCategories = async () => {
    const response = await axios.get("http://localhost:8080/api/category/all");
    return response.data;
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories();
      if (allCategories) {
        setCategories(allCategories);
      }
    };

    getAllCategories();
  }, []);

  const handleInput = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const saveBook = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedPhoto);
    formData.append("title", book.title);
    formData.append("description", book.description);
    formData.append("price", book.price);
    formData.append("quantity", book.quantity);
    formData.append("categoryId", book.categoryId);

    axios
      .post("http://localhost:8080/api/book/add", formData)
      .then(() => {
        alert("Book saved successfully");
        setBook({
          title: "",
          description: "",
          price: "",
          quantity: "",
          categoryId: "",
        });
        setSelectedPhoto(null);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Error saving book");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card form-card">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="card-title">Add Book</h5>
            </div>
            <div className="card-body">
              <form onSubmit={saveBook}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    <b>Book Title</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handleInput}
                    value={book.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    <b>Book Description</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    onChange={handleInput}
                    value={book.description}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <b>Category</b>
                  </label>
                  <select
                    name="categoryId"
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3 mt-1">
                  <label htmlFor="quantity" className="form-label">
                    <b>Book Quantity</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    onChange={handleInput}
                    value={book.quantity}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    <b>Book Price</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={handleInput}
                    value={book.price}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    <b>Select Book Image</b>
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="photo"
                    onChange={(e) => setSelectedPhoto(e.target.files[0])}
                  />
                </div>

                <button
                  type="submit"
                  className="btn button"
                >
                  Add Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
