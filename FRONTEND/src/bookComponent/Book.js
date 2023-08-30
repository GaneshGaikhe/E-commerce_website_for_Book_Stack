import GetAllCategories from "./GetAllCategories";
import CategoryNavigator from "./CategoryNavigator";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { ToastContainer, toast } from "react-toastify";

const Book = () => {
  const { bookId, categoryId } = useParams();

  let user = JSON.parse(sessionStorage.getItem("active-user"));

  const [quantity, setQuantity] = useState("");

  const [books, setBooks] = useState([]);

  const [book, setBook] = useState({
    id: "",
    title: "",
    description: "",
    quantity: "",
    price: "",
    imageName: "",
    category: { id: "", title: "" },
  });

  const retrieveBook = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/id?bookId=" + bookId
    );

    return response.data;
  };

  useEffect(() => {
    const getBook = async () => {
      const retrievedBook = await retrieveBook();

      setBook(retrievedBook);
    };

    const getBooksByCategory = async () => {
      const allBooks = await retrieveBooksByCategory();
      if (allBooks) {
        setBooks(allBooks);
      }
    };

    getBook();
    getBooksByCategory();
  }, [bookId]);

  const retrieveBooksByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/book/category?categoryId=" + categoryId
    );
    console.log(response.data);
    return response.data;
  };

  const saveBookToCart = (userId) => {
    fetch("http://localhost:8080/api/user/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        userId: userId,
        bookId: bookId,
      }),
    }).then((result) => {
      console.log("result", result);

      toast.success("Books added to Cart Successfully!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      result.json().then((res) => {
        console.log("response", res);
      });
    });
  };

  const addToCart = (e) => {
    if (user == null) {
      alert("Please login to buy the books!!!");
      e.preventDefault();
    } else {
      saveBookToCart(user.id);
      setQuantity("");
      e.preventDefault();
    }
  };

  return (
    <div className="container-fluid">
      <div class="row">
        <div class="col-sm-2 mt-2">
          <GetAllCategories />
        </div>
        <div class="col-sm-3 mt-2 admin">
          <div class="card form-card border-color custom-bg">
            <img
              src={"http://localhost:8080/api/book/" + book.imageName}
              style={{
                maxHeight: "500px",
                maxWidth: "100%",
                width: "auto",
              }}
              class="card-img-top rounded mx-auto d-block m-2"
              alt="img"
            />
          </div>
        </div>
        <div class="col-sm-7 mt-2">
          <div class="card form-card border-color custom-bg">
            <div class="card-header bg-color">
              <div className="d-flex justify-content-between">
                <h1 className="custom-bg-text">{book.title}</h1>
              </div>
            </div>

            <div class="card-body text-left text-color">
              <div class="text-left mt-3">
                <h3>Description :</h3>
              </div>
              <h4 class="card-text">{book.description}</h4>
            </div>

            <div class="card-footer custom-bg">
              <div className="text-center text-color">
                <p>
                  <span>
                    <h4>Price : &#8377;{book.price}</h4>
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <form class="row g-3" onSubmit={addToCart}>
                    <div class="col-auto">
                      <input
                        type="number"
                        class="form-control"
                        id="addToCart"
                        placeholder="Enter Quantity..."
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                      />
                    </div>
                    <div class="col-auto">
                      <input
                        type="submit"
                        className="btn bg-color custom-bg-text mb-3"
                        value="Add to Cart"
                      />
                      <ToastContainer />
                    </div>
                  </form>
                </div>

                <p class="ml-2 text-color">
                  <b>Stock : {book.quantity}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm-2"></div>

        <div className="col-sm-10">
          <h2>Related Books:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {books.map((book) => {
              return <BookCard item={book} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
