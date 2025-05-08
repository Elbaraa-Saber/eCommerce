import { Container } from "react-bootstrap"
import styles from "./styles.module.css"
import Header from "../../eCommerce/common/Header/Header";
const { container , wrapper } = styles;

function MainLayout() {
  return (
    <Container className={container}>
        <Header/>
      <div className={wrapper}>Wripper</div>
    </Container>
  )
}

export default MainLayout
