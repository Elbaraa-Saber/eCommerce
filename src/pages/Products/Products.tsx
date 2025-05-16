import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { actGetProducts, productsCleanUp } from "@store/products/productsSlice";

import { useDispatch } from "react-redux";
import { useAppSelector } from "@store/hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { AppDispatch } from "@store/index";
const Products = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, records } = useAppSelector((state) => state.Products);
  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : "There are no categories available. Please try again later.  ";

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
