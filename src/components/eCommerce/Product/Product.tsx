import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
        //   src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
          alt=""
          src="https://media.cnn.com/api/v1/images/stellar/prod/881e9ac1-262a-4f18-892f-a45964d207d2.jpeg?c=original&q=w_960,c_fill"
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;