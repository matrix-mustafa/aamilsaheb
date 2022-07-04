import React from 'react'
import logo from "../logotal.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function MainNavbar(props) {
    const {headerData , userFullName} = props
    const navigate = useNavigate();

    const userName =  localStorage.getItem("username");

    const handleUrl = () => {
        navigate('/mauze-profile-entry');
      }
  return (
    <Navbar style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
            <a href='https://www.talabulilm.com'><img className="" src={logo} alt='img' /></a>
          <h3>Current Education Status of {`${headerData && headerData[0]?.jamaat}`} (Age: 3-27) </h3>
            <div className='d-flex'>
              <div className="image-header" >
                {userFullName?.name}<br />
                <div>
                  <a className='top-nav-link active' href='https://aamilsaheb.talabulilm.com/' target={'_blank'}  >Home</a>
                  <a className='top-nav-link' target={'_blank'} onClick={handleUrl}>Bulk Entry</a>
                  <a className='top-nav-link' href='https://www.talabulilm.com' target={'_blank'}>Talabulilm Home</a>
                </div>
              </div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/${userName}.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
  )
}
