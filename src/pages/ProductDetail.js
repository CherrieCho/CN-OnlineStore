import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  //현재 페이지 파라미터값 읽어오기
  const { id } = useParams();
  //상품디테일 불러오는 함수
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/CherrieCho/CN-OnlineStore/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="product-container">
      <Container className="detail-box">
        <Row className="container-row">
          <Col sm={6}>
            <img src={product?.img} className="detail-img" />
          </Col>
          <Col sm={1}></Col>
          <Col sm={5} className="detail-column">
            <div>{product?.choice === true ? "Concious Choice" : ""}</div>
            <h3>{product?.title}</h3>
            <h3>{product?.price}원</h3>
            <div className="d-grid">
              <Button variant="dark" size="lg">
                구매하기
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
