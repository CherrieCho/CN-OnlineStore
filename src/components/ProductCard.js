import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={goToDetail}>
      <div className="image-wrapper">
        <img src={item?.img} className="product-thumbnail-img" />
      </div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.choice === true ? "Concious Choice" : ""}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
