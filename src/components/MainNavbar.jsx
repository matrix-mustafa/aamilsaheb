import React , {useEffect, useState} from 'react'
import logo from "../logotal.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import "./MainNavbar.css"
import { useLocation } from 'react-router-dom';

export default function MainNavbar(props) {
    const {headerData , userFullName} = props
    const navigate = useNavigate();
    let location = useLocation();

    const userName =  localStorage.getItem("username");

    const handleUrl = (url) => {
      if(url === "home"){
        navigate('/');
      }else if(url === "mauze"){
        navigate('/mauze-profile-entry');
      }else if(url === "task"){
        navigate('/task');
      }

      }

      const onActive = {
        backgroundColor:"#fff" ,
        color:"#000"

      }

  return (
    <Navbar className='largeContainer' style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
            <a href='https://www.talabulilm.com'><img className="" src={logo} alt='img' /></a>
          <h3>Current Education Status for Age: 3-27<br />{`${headerData ? headerData?.jamaat : ""}`} </h3>
            <div className='d-flex'>
              <div className="image-header" >
                {userFullName?.name}<br />
                <div>
                  <a className='top-nav-link ' style={{...(location.pathname === "/" ? onActive : "")}} onClick={ () => handleUrl("home")}  >Home</a>
                  <a className='top-nav-link' style={{...(location.pathname === "/mauze-profile-entry" ?  onActive : "")}}  onClick={ () => handleUrl("mauze")}>Education Survey</a>
                  <a className='top-nav-link' style={{...(location.pathname === "/task"?onActive : "")}}  onClick={ () => handleUrl("task")}>My Task</a>
                </div>
              </div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/${userName}.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
  )
}
