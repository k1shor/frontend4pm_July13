import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./components/pages/Home";
import Firstpage from "./First";
import Second from "./Second"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Deals from "./components/pages/Deals";
import Signin from "./components/pages/Signin";
import Register from "./components/pages/Register";
import MUIHome from "./components/pages/MUIHome";
import Cart from "./components/pages/Cart";
import Blogs from "./components/pages/Blogs";
import Contact from "./components/pages/Contact";
import ConfirmEmail from "./components/pages/ConfirmEmail";
import ForgetPassword from "./components/pages/ForgetPassword";
import ResetPassword from "./components/pages/ResetPassword";
import AdminDashboard from "./components/pages/AdminDashboard";
import ViewCategories from "./components/pages/Category/ViewCategories";
import AddCategory from "./components/pages/Category/AddCategory";
import UpdateCategory from "./components/pages/Category/UpdateCategory";
import ResendVerifiation from "./components/pages/ResendVerification";
import DeleteCategory from "./components/pages/Category/DeleteCategory";
import AdminRoute from "./selectiveRoutes/AdminRoute";
import PrivateRoute from "./selectiveRoutes/PrivateRoute";
import ProductsAdmin from "./components/pages/Products/ProductsAdmin";
import EditProduct from "./components/pages/Products/EditProduct";
import DeleteProduct from "./components/pages/Products/DeleteProduct";
import AddProduct from "./components/pages/Products/AddProduct";
import ProductDetails from "./components/pages/Products/ProductDetails";
import ConfirmOrder from "./components/pages/ConfirmOrder";
import Shipping from "./components/pages/Shipping";
import PaymentElement from "./components/PaymentElement";
import PaymentSuccess from "./components/PaymentSuccess";
import UserProfile from "./components/pages/User/UserProfile";

const MyRoutes = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/confirmuser/:token" element={<ConfirmEmail />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/resendverification" element={<ResendVerifiation />} />

        <Route path='/home' element={<MUIHome />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path= '/user/profile' element={<Cart/>}/> */}

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path='/confirmorder' element={<ConfirmOrder/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path="/payment" element={<PaymentElement/>}/>
          <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
          <Route path="/user/profile" element={<UserProfile/>}/>
        </Route>

        <Route path="/product/:id" element={<ProductDetails/>}/>

        <Route path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductsAdmin />} />
          <Route path='/admin/category' element={<ViewCategories />} />
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/updatecategory/:id" element={<UpdateCategory />} />
          <Route path="/admin/deletecategory/:id" element={<DeleteCategory />} />

          <Route path="/admin/addproduct" element={<AddProduct/>}/>
          <Route path="/admin/updateproduct/:id" element={<EditProduct/>}/>
          <Route path="/admin/deleteproduct/:id" element={<DeleteProduct/>}/>

        </Route>

      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default MyRoutes