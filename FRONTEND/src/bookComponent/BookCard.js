// import { Link } from "react-router-dom";
// import CategoryNavigator from "./CategoryNavigator";

// const BookCard = (book) => {
//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card h-100">
//         <img
//           src={"http://localhost:8080/api/book/" + book.item.imageName}
//           className="card-img-top"
//           alt="Book"
//         />

//         <div className="card-body">
//           <h5 className="card-title">{book.item.title}</h5>
//           <p className="card-text">{book.item.description}</p>
//         </div>

//         <div className="card-footer">
//           <div className="d-flex justify-content-between align-items-center">
//             <span className="badge bg-primary">
//               Price: &#8377;{book.item.price}
//             </span>

//             <div className="btn-group">
//               <Link
//                 to={`/book/${book.item.id}/category/${book.item.category.id}`}
//                 className="btn btn-primary"
//               >
//                 Add to Cart
//               </Link>
//               <Link
//                 to={`/review/${book.item.id}`}
//                 className="btn btn-secondary"
//               >
//                 Review
//               </Link>
//             </div>
//           </div>

//           <div className="mt-2">
//             <CategoryNavigator
//               item={{
//                 id: book.item.category.id,
//                 title: book.item.category.title,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;


import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="d-flex">
          <img
            src={`http://localhost:8080/api/book/${item.imageName}`}
            className="card-img-left"
            alt="Book"
            style={{ maxWidth: "100px" }}
          />

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-primary">
              Price: &#8377;{item.price}
            </span>

            <div className="btn-group">
              <Link
                to={`/book/${item.id}/category/${item.category.id}`}
                className="btn btn-primary"
              >
                Add to Cart
              </Link>
              <Link to={`/review/${item.id}`} className="btn btn-secondary">
                Review
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <Link
              to={`/home/book/category/${item.category.id}/${item.category.title}`}
              className="text-decoration-none"
            >
              <b>{item.category.title}</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
