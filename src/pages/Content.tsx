import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { Route, Routes, useLocation, useNavigate } from "react-router";

import Cart from "./Cart";
import Login from "./Login";
import SignUp from "./SignUp";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import MyOrders from "./MyOrders";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";

const Content: FC = () => {
  const [productId, setProductId] = useState(0);
  const { auth } = useAppSelector((state) => state.products);

  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.id && (location === "/cart" || location === "/my-orders")) {
      navigate("login");
    }
  }, [location, auth, navigate]);

  return (
    <Routes>
      <Route path="/products" element={<Products setProductId={setProductId} />} />
      <Route path={`/products/:${productId}`} element={<ProductInfo productId={productId} />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/cart" element={<Cart setProductId={setProductId} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Content;
