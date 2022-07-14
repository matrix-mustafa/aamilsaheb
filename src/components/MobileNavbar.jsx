import React  from "react";
// import "./styles.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { ReactComponent as Logo } from "./logo.svg";
import "./MobileNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

export default function MobileNavbar() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    if(url ==="home"){
      navigate('/');
    }else if(url === "mauze"){
      navigate('/mauze-profile-entry');
    }else if(url === "task"){
      navigate('/task');
    }
  }

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
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light text-start"   onClick={ () => handleNavigate("home")} >Home</Nav.Link>
          <Nav.Link className="text-light text-start"   onClick={ () => handleNavigate("mauze")} >Education Survey</Nav.Link>
          <Nav.Link className="text-light text-start"  onClick={ () => handleNavigate("task")} >My Tasks</Nav.Link>
        </Nav>
      </Navbar.Toggle>
      </Navbar.Collapse>
    
    </Navbar>
  );
}
