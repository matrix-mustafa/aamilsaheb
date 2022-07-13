import React from "react";
// import "./styles.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";
import "./MobileNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

import "bootstrap/dist/css/bootstrap.min.css";

export default function MobileNavbar() {
  return (
    <Navbar  className="smallScreen shadow-sm" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home" className="text-light">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
        Ummal Module
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <FontAwesomeIcon color={"#fff"} icon={faBars} />
</Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="text-light">Home</Nav.Link>
          <Nav.Link href="/mauze-profile-entry" className="text-light">Education Survey</Nav.Link>
          <Nav.Link href="/tasks" className="text-light">My Tasks</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
