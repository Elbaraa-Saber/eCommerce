import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hook";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/eCommerce";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.Categories)
  useEffect(() => {
    dispatch(actGetCategories())
  }, [dispatch]);

  const categoriesList = records.length > 0 ? records.map((record) =>
    <Col key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Category {...record} />
    </Col>
  ) : "There are no categories available. Please try again later.  ";
  return (
    <Container>
      <Row>
        {categoriesList}
      </Row>
    </Container>
  )
}

export default Categories
