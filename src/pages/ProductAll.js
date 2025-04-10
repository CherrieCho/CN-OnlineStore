import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  //데이터 호출함수
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/CherrieCho/CN-OnlineStore/products`;
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-all-container">
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
