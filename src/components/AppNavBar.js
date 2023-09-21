import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./AppNavBar.css";
import ProfileAvatar from "../assets/images/landing/profile.svg";
import { useEffect, useState } from "react";

const AppNavBar = () => {
  const[name, setName] = useState(null);
  useEffect(() => {
    setName(localStorage.getItem("name"))
  },[name])
	return (
		<Navbar collapseOnSelect expand="lg" className="app-navbar">
      <Container>
        <Navbar.Brand href="/landing-page">SkyFitzz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/landing-page">Home</Nav.Link>
            <NavDropdown title="E-wardrobe" id="collasible-nav-dropdown" className="e-wardrobe-dropdown">
              <NavDropdown.Item href="/gallery">SkyFitzz Web Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/e-wardrobe">Generated Collections</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link href="/profile" className="profile-name">
              <img src={ProfileAvatar} alt="User profile avatar" className="right-margin" height="20px" />
              {name?.split(" ")[0]||"Guest"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
};

export default AppNavBar;
