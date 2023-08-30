// import { Link } from "react-router-dom";

// const CategoryNavigator = (category) => {
//   console.log(category);
//   return (
//     <Link
//       to={`/home/book/category/${category.item.id}/${category.item.title}`}
//       style={{
//         textDecoration: "none",
//       }}
//       className="text-color"
//     >
//       <b>
//         {" "}
//         <i>{category.item.title}</i>
//       </b>
//     </Link>
//   );
// };

// export default CategoryNavigator;


import { Link } from "react-router-dom";

const CategoryNavigator = (category) => {
  return (
    <Link
      to={`/home/book/category/${category.item.id}/${category.item.title}`}
      style={{
        textDecoration: "none",
        color: "#009688", // Set your desired text color
        fontWeight: "bold",
      }}
      className="text-decoration-none"
    >
      <i>{category.item.title}</i>
    </Link>
  );
};

export default CategoryNavigator;
