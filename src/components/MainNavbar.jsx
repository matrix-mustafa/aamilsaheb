import React , {useState} from 'react'
import logo from "../logotal.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function MainNavbar(props) {
    const {headerData , userFullName} = props
    const navigate = useNavigate();
    const [active , setActive] = useState(0);

    const userName =  localStorage.getItem("username");

    const handleUrl = (url) => {
      if(url ==="home"){
        navigate('/');
        setActive(0)
      }else if(url === "mauze"){
        navigate('/mauze-profile-entry');
        setActive(1)
      }
        
      }

      const onActive = {
        backgroundColor:"#fff" , 
        color:"#000" 

      }
      
  return (
    <Navbar style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
            <a href='https://www.talabulilm.com'><img className="" src={logo} alt='img' /></a>
          <h3>Current Education Status for Age: 3-27<br />{`${headerData && headerData[0]?.jamaat}`} </h3>
            <div className='d-flex'>
              <div className="image-header" >
                {userFullName?.name}<br />
                <div>
                  <a className='top-nav-link ' style={{...(active === 0 ? onActive : "")}} onClick={ () => handleUrl("home")}  >Home</a>
                  <a className='top-nav-link' style={{...(active === 1 ? onActive : "")}}  onClick={ () => handleUrl("mauze")}>Education Survey</a>
                </div>
              </div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/${userName}.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
  )
}
