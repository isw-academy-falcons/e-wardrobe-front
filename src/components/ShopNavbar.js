import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./AppNavBar.css";
import ProfileAvatar from "../assets/images/landing/profile.svg";

const ShopNavBar = ({ onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    console.log(category);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="app-navbar">
      <Container>
        <Navbar.Brand href="/landing-page">SkyFitzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Nav.Link href="/landing-page">Home</Nav.Link>
            <NavDropdown
              title="E-wardrobe"
              id="collasible-nav-dropdown"
              className="e-wardrobe-dropdown"
            >
              <NavDropdown.Item href="#sc">
                SkyFitzz Web Gallery
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ew">
                Generated Collections
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Fashion"
              id="collasible-nav-dropdown"
              className="e-wardrobe-dropdown"
            >
              <NavDropdown.Item onClick={() => handleCategoryClick("men")}>
                Men Clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryClick("women")}>
                Women Clothing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/landing-page" className="profile-name">
              <img
                src={ProfileAvatar}
                alt="User profile avatar"
                className="right-margin"
                height="20px"
              />
              Damilola
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ShopNavBar;