import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { Row, Card, Col, InputGroup, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  filterProductsThunk,
  filterCategoryThunk,
} from "../store/slices/products.slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  return (
    <div>
      <h1>Welcome to my personal store</h1>
      <Row>
        <Col>
          <ListGroup horizontal>
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => dispatch(filterCategoryThunk(category.id))}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Product Search"
          aria-label="Product Search"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(filterProductsThunk(searchValue))}
        >
          Button
        </Button>
      </InputGroup>
      <div className="cards">
      {products.map((productsItem) => (

      <div key={productsItem.id} className="card">
        <div className="card-body"  onClick={() => navigate(`/productDetail/${productsItem.id}`)}
                style={{ width: "11rem" }}>
          <h2 >{productsItem.title}</h2>
          <p> <img className="imgP" src={productsItem.productImgs[0]}/></p>
          <p>Price: {productsItem.price}</p>
          <Button
                    onClick={() =>
                      navigate(`/productDetail/${productsItem.id}`)
                    }
                    variant="primary"
                  >
                    Go to Detail
                  </Button>
        </div>
      </div>

))}
      
</div>
      

      {/* {products.map((productsItem) => (
        <Container key={productsItem.id}>
          <Row xs={1} md={3} className="g-4">
            <Col xs={6}>
              <Card
                onClick={() => navigate(`/productDetail/${productsItem.id}`)}
                style={{ width: "11rem" }}
              >
                <Card.Img variant="top" src={productsItem.productImgs[0]} />
                <Card.Body>
                  <Card.Title>{productsItem.title}</Card.Title>
                  <Card.Text>{productsItem.price}</Card.Text>
                  <Button
                    onClick={() =>
                      navigate(`/productDetail/${productsItem.id}`)
                    }
                    variant="primary"
                  >
                    Go to Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))} */}
    </div>
  );
};

export default Home;
