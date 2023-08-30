// import GetAllCategories from "../bookComponent/GetAllCategories";
// import CategoryNavigator from "../bookComponent/CategoryNavigator";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import BookCard from "../bookComponent/BookCard";
// import { ToastContainer, toast } from "react-toastify";
// import RoleNav from "./RoleNav";

// const Review = () => {
//   const { bookId, categoryId } = useParams();

//   let user = JSON.parse(sessionStorage.getItem("active-user"));

//   const [reviews, setReviews] = useState([]);

//   const [book, setBook] = useState({
//     id: "",
//     title: "",
//     description: "",
//     quantity: "",
//     price: "",
//     imageName: "",
//     category: { id: "", title: "" },
//   });

//   const retrieveBook = async () => {
//     const response = await axios.get(
//       "http://localhost:8080/api/book/id?bookId=" + bookId
//     );

//     return response.data;
//   };
//   const retrieveReview = async () => {
//     const response = await axios.get(
//       "http://localhost:8080/api/user/reviews/" + bookId
//     );

//     return response.data;
//   };
//   useEffect(() => {
//     const getReviews = async () => {
//       const retrievedReviews = await retrieveReview();
//       console.log(retrievedReviews);
//       setReviews(retrievedReviews);
//     };

//     getReviews();
//   }, []);
//   useEffect(() => {
//     const getBook = async () => {
//       const retrievedBook = await retrieveBook();

//       setBook(retrievedBook);
//     };

//     getBook();
//   }, [bookId]);

//   const addReview = async (userId, bookId, comment, rating) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/user/addReview",
//         {
//           user_id: userId,
//           book_id: bookId,
//           comment: comment,
//           rating: rating,
//         }
//       );

//       toast.success("Review added successfully.");
//       setReviews([...reviews, response.data]);
//     } catch (error) {
//       toast.error("Failed to add review.");
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div class="row">
//         <div class="col-sm-2 mt-2">
//           <GetAllCategories />
//         </div>
//         <div class="col-sm-3 mt-2 admin">
//           <div class="card form-card border-color custom-bg">
//             <img
//               src={"http://localhost:8080/api/book/" + book.imageName}
//               style={{
//                 maxHeight: "500px",
//                 maxWidth: "100%",
//                 width: "auto",
//               }}
//               class="card-img-top rounded mx-auto d-block m-2"
//               alt="img"
//             />
//             <div class="card-body">
//               <h5 class="card-title d-flex justify-content-between">
//                 {book.title}
//               </h5>
//               <p class="card-text">{book.description}</p>
//             </div>
//           </div>
//         </div>
//         <div class="col-sm-7 mt-2">
//           <div class="card border-color custom-bg mt-3">
//             <div class="card-header bg-color">
//               <h4 class="card-title  bg-color custom-bg-text">
//                 {book.title} Reviews
//               </h4>
//             </div>
//             <div class="card-body">
//               <div class="row">
//                 <div class="table-responsive">
//                   <table class="table ">
//                     <thead>
//                       <tr>
//                         <th>Comment</th>
//                         <th>Rating</th>
//                         <th>Customer</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {reviews.length > 0 ? (
//                         reviews.map((review) => (
//                           <tr key={review.id}>
//                             <td>{review.comment}</td>
//                             <td>{review.rating}</td>
//                             <td>{review.user.firstName}</td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="3">No reviews found for this book</td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="card border-color custom-bg mt-3">
//             <div class="card-header bg-color">
//               <h4 class="card-card-title  bg-color custom-bg-text">
//                 Add a Review
//               </h4>
//             </div>
//             <div class="card-body">
//               <form>
//                 <div class="form-group">
//                   <label for="comment">Comment:</label>
//                   <textarea
//                     class="form-control"
//                     id="comment"
//                     rows="3"
//                     required
//                   ></textarea>
//                 </div>
//                 <div class="form-group">
//                   <label for="rating">Rating:</label>
//                   <select class="form-control" id="rating" required>
//                     <option value="">Select a rating</option>
//                     <option value="1">1 star</option>
//                     <option value="2">2 stars</option>
//                     <option value="3">3 stars</option>
//                     <option value="4">4 stars</option>
//                     <option value="5">5 stars</option>
//                   </select>
//                 </div>
//                 <button
//                   type="submit"
//                   class="btn bg-color custom-bg-text"
//                   disabled={!user}
//                   onClick={() =>
//                     addReview(
//                       1,
//                       bookId,
//                       document.getElementById("comment").value,
//                       document.getElementById("rating").value
//                     )
//                   }
//                 >
//                   Submit Review
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         {/* <div class="col-sm-2 mt-2">
//           <RoleNav />
//         </div> */}
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };
// export default Review;



import GetAllCategories from "../bookComponent/GetAllCategories";
import CategoryNavigator from "../bookComponent/CategoryNavigator";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../bookComponent/BookCard";
import { ToastContainer, toast } from "react-toastify";
import RoleNav from "./RoleNav";

const Review = () => {
  const { bookId, categoryId } = useParams();

  let user = JSON.parse(sessionStorage.getItem("active-user"));

  const [reviews, setReviews] = useState([]);

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
  const retrieveReview = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/reviews/" + bookId
    );

    return response.data;
  };
  useEffect(() => {
    const getReviews = async () => {
      const retrievedReviews = await retrieveReview();
      console.log(retrievedReviews);
      setReviews(retrievedReviews);
    };

    getReviews();
  }, []);
  useEffect(() => {
    const getBook = async () => {
      const retrievedBook = await retrieveBook();

      setBook(retrievedBook);
    };

    getBook();
  }, [bookId]);

  const addReview = async (userId, bookId, comment, rating) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/addReview",
        {
          user_id: userId,
          book_id: bookId,
          comment: comment,
          rating: rating,
        }
      );

      toast.success("Review added successfully.");
      setReviews([...reviews, response.data]);
    } catch (error) {
      toast.error("Failed to add review.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 mt-2">
          <GetAllCategories />
        </div>
        <div className="col-sm-3 mt-2 admin">
          <div className="card form-card border-color custom-bg">
            <img
              src={"http://localhost:8080/api/book/" + book.imageName}
              style={{
                maxHeight: "500px",
                maxWidth: "100%",
                width: "auto",
              }}
              className="card-img-top rounded mx-auto d-block m-2"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                {book.title}
              </h5>
              <p className="card-text">{book.description}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-7 mt-2">
          <div className="card border-color custom-bg mt-3">
            <div className="card-header bg-color">
              <h4 className="card-title bg-color custom-bg-text">
                {book.title} Reviews
              </h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Comment</th>
                        <th>Rating</th>
                        <th>Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.length > 0 ? (
                        reviews.map((review) => (
                          <tr key={review.id}>
                            <td>{review.comment}</td>
                            <td>{review.rating}</td>
                            <td>{review.user.firstName}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3">No reviews found for this book</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-color custom-bg mt-3">
            <div className="card-header bg-color">
              <h4 className="card-card-title bg-color custom-bg-text">
                Add a Review
              </h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    className="form-control"
                    id="comment"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating:</label>
                  <select className="form-control" id="rating" required>
                    <option value="">Select a rating</option>
                    <option value="1">1 star</option>
                    <option value="2">2 stars</option>
                    <option value="3">3 stars</option>
                    <option value="4">4 stars</option>
                    <option value="5">5 stars</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  disabled={!user}
                  onClick={() =>
                    addReview(
                      user.id,
                      bookId,
                      document.getElementById("comment").value,
                      document.getElementById("rating").value
                    )
                  }
                >
                  Submit Review
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
export default Review;
