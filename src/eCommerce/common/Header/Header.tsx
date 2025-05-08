
import { Navbar, Nav, Container, Badge } from "react-bootstrap"
import styles from './header.module.css';
const {headerContainer , headerLogo} = styles;
function Header() {
  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                <span>Our</span>
                <Badge bg="info">Ecom</Badge>
            </h1>
        </div>
      <Navbar  expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
