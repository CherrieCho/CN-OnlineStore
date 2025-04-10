import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={goToDetail}>
      <div className="image-wrapper">
        <img src={item?.img} className="product-thumbnail-img" />
      </div>
      <div className="product-info">
        <div>{item?.title}</div>
        <div className="price-new">
          <div>{item?.price}원</div>
          <div>{item?.new === true ? "NEW" : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
