import Carousel from "./Carousel";
import GetAllCategories from "../bookComponent/GetAllCategories";
import BookCard from "../bookComponent/BookCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await retrieveAllBooks();
      if (allBooks) {
        setBooks(allBooks);
      }
    };

    const getBooksByCategory = async () => {
      const allBooks = await retrieveBooksByCategory();
      if (allBooks) {
        setBooks(allBooks);
      }
    };

    if (categoryId == null) {
      console.log("Category Id is null");
      getAllBooks();
    } else {
      console.log("Category Id is NOT null");
      getBooksByCategory();
    }
  }, [categoryId]);

  const retrieveAllBooks = async () => {
    const response = await axios.get("http://localhost:8080/api/book/all");

    return response.data;
  };

  const retrieveBooksByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/category?categoryId=" + categoryId
    );

    return response.data;
  };

  return (
    <div className="container-fluid mb-2">
      <Carousel />
      <div className="mt-2 mb-5">
        <div className="row">
          <div className="col-md-2">
            <GetAllCategories />
          </div>
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              
                {books.map((book) => {
                  return <BookCard item={book} />;
                })}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
