import Header from "./pages/Header";
import DeleteUser from "./pages/DeleteUser";
import AddBookForm from "./bookComponent/AddBookForm";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AddCategoryForm from "./bookComponent/AddCategoryForm";
import HomePage from "./pages/HomePage";
import Book from "./bookComponent/Book";
import AddUserForm from "./userComponent/AddUserForm";
import UserLoginForm from "./userComponent/UserLoginForm";
import MyCart from "./userComponent/MyCart";
import AddCardDetails from "./pages/AddCardDetails";
import MyOrder from "./userComponent/MyOrder";
import AllOrders from "./userComponent/AllOrders";
import SearchOrder from "./userComponent/SearchOrder";
import RegisterAdminForm from "./userComponent/RegisterAdminForm";
import AdminLoginPage from "./userComponent/AdminLoginPage";
import AddDeliveryPerson from "./userComponent/AddDeliveryPerson";
import DeliveryPersonLogin from "./userComponent/DeliveryPersonLogin";
import AssignDeliveryToOrders from "./userComponent/AssignDeliveryToOrders";
import MyDeliveries from "./userComponent/MyDeliveries";
import DeleteBookPage from "./pages/DeleteBookPage";
//import AdmminBookCard from "./bookComponent/AdminBookCard";
import Review from "./pages/Review";
import RoleNav from "./pages/RoleNav";
import AddReview from "./pages/AddReview";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/book/categories" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/deletebook" element={<DeleteBookPage />} />
        <Route path="addbook" element={<AddBookForm />} />
        <Route path="addcategory" element={<AddCategoryForm />} />
        <Route path="/book" element={<Book />} />
        <Route path="/user/register" element={<AddUserForm />} />
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/admin/register" element={<RegisterAdminForm />} />
        <Route path="/user/admin/login" element={<AdminLoginPage />} />
        <Route path="/review/book/:bookId" element={<AddReview />} />
        <Route
          path="/user/deliveryperson/register"
          element={<AddDeliveryPerson />}
        />
        <Route
          path="/user/deliveryperson/login"
          element={<DeliveryPersonLogin />}
        />
        <Route
          path="/home/book/category/:categoryId/:categoryName"
          element={<HomePage />}
        />

        <Route path="/deleteUser" element={<DeleteUser />} />
        <Route
          path="/book/:bookId/category/:categoryId"
          element={<Book />}
        />
        <Route path="/review/:bookId" element={<Review />} />
        <Route path="/user/mycart" element={<MyCart />} />
        <Route path="/user/order/payment" element={<AddCardDetails />} />
        <Route path="/user/myorder" element={<MyOrder />} />
        <Route path="/user/admin/allorder" element={<AllOrders />} />
        <Route path="/user/admin/searchOrder" element={<SearchOrder />} />
        <Route
          path="/user/admin/assigndelivery"
          element={<AssignDeliveryToOrders />}
        />
        <Route path="/user/delivery/myorders" element={<MyDeliveries />} />
      </Routes>
    </div>
  );
}

export default App;
