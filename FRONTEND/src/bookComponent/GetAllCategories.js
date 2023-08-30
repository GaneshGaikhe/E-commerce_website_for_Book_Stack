import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  // Function to retrieve all categories from the backend
  const retrieveAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/category/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return []; // Return an empty array on error
    }
  };

  // Use useEffect to fetch categories when the component mounts
  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await retrieveAllCategories();
      if (allCategories) {
        setCategories(allCategories);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="categoryDropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Book Categories
      </button>
      <div className="dropdown-menu" aria-labelledby="categoryDropdown">
        <Link to="/home/all/book/categories" className="dropdown-item">
          All Categories
        </Link>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category.id}
              to={`/home/book/category/${category.id}/${category.title}`}
              className="dropdown-item"
            >
              {category.title}
            </Link>
          ))
        ) : (
          <span className="dropdown-item">No categories available</span>
        )}
      </div>
    </div>
  );
};

export default GetAllCategories;
