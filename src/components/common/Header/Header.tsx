import { HeaderBasket } from "../../eCommerce/index";
import { Navbar, Nav, Container, Badge } from "react-bootstrap"
import styles from './styles.module.css';
import { NavLink } from "react-router-dom";

const {headerContainer , headerLogo} = styles;
function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>Our</span>
                <Badge bg="info">Ecom</Badge>
            </h1>
            <HeaderBasket/>
        </div>
      <Navbar  expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/'}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={'categories'}>Categories</Nav.Link>
            <Nav.Link as={NavLink} to={'about-us'}>About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to={'login'}>Login</Nav.Link>
            <Nav.Link as={NavLink} to={'register'}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
