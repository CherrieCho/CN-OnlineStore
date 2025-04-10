import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const PrivateRoute = ({ auth }) => {
  if (!auth) {
    alert("상품 확인은 로그인이 필요합니다");
    return <Navigate to="/login" />;
  }

  return <ProductDetail />;
};

export default PrivateRoute;
