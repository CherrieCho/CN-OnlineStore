import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClipLoader from "react-spinners/ClipLoader";

const ProductAll = () => {
  let [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  //데이터 호출함수
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/CherrieCho/CN-OnlineStore/products?q=${searchQuery}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) throw new Error("응답 실패");
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("데이터 호출 중 에러:", error);
      alert("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  // 로딩 중일 때
  if (loading) {
    return (
      <div className="product-container">
        <div className="loader">
          <ClipLoader
            color={"#F00301"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }

  // 검색결과 없을 때
  if (productList.length === 0) {
    return (
      <div className="product-container">
        <Container className="no-results">
          <Row>
            <Col className="no-results-text">
              <div>검색 결과가 없습니다.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  // 데이터가 있을 때
  return (
    <div className="product-container">
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
