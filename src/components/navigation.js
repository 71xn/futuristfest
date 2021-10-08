import { Navbar, Button, Nav, Container } from "react-bootstrap";
import logo from "../logo.png";
import "../styles/navigation.css";

const onButtonClick = () => {
  window.open("https://github.com/71xn");
};

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          FuturistFest 2021 ➡ Carbon Footprint Calculator
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-success" onClick={onButtonClick}>
            GitHub
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
