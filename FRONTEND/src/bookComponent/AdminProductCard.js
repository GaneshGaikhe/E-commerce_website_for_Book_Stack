import { Link } from "react-router-dom";
import CategoryNavigator from "./CategoryNavigator";
import axios from "axios";
const deleteBookFrom = (bookId) => {
  const response = axios.delete(
    "http://localhost:8080/api/book/delete? bookId=" + bookId
  );

  console.log(response);
};

const AdmminBookCard = (book) => {
  return (
    <div className="col">
      <div class="card border-color rounded-card card-hover book-card custom-bg h-100">
        <img
          src={"http://localhost:8080/api/book/" + book.item.imageName}
          class="card-img-top rounded mx-auto d-block m-2"
          alt="img"
          style={{
            maxHeight: "270px",
            maxWidth: "100%",
            width: "auto",
          }}
        />

        <div class="card-body text-color">
          <h5 class="card-title d-flex justify-content-between">
            <div>
              <b>{book.item.title}</b>
            </div>
            <CategoryNavigator
              item={{
                id: book.item.category.id,
                title: book.item.category.title,
              }}
            />
          </h5>
          <p className="card-text">
            <b>{book.item.description}</b>
          </p>
        </div>
        <div class="card-footer">
          <div className="text-center text-color">
            <p>
              <span>
                <h4>Price : &#8377;{book.item.price}</h4>
              </span>
            </p>
            <p class="text-color">
              <b>
                <i>id :</i> {book.item.id}
              </b>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn bg-color custom-bg-text btn-sm"
              onClick={() => deleteBookFrom(book.item.id)}
            >
              Delete
            </button>

            <p class="text-color">
              <b>
                <i>Stock :</i> {book.item.quantity}
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmminBookCard;
