import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import useFetch from "./useFetch";
import EducationDetail from './components/EducationDetail';
import Sidebar from './components/Sidebar';
import HashLoader from "react-spinners/HashLoader";
import logo from "./logotal.png"
import LinkElement from './components/Sidebar/LinkElement';

export default function App() {
  const [dropoutList , setDropoutList] = useFetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/dropOutUserList/170');
  const [EduStatus , setEduStatus] = useState("Drop Outs");
  let [color, setColor] = useState("#00336D");

  const onLoad = {
    height: "100vh"
  }

  return (
    <>
      <Navbar style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
          <img className="" src={logo} alt='img' />
          Current Education Status of Ahmedabad Jamaat (Age: 3-27)
            <div className='d-flex'>
              <div className="image-header" >Shaikh Mustafa bhai Shaikh Jafar bhai Moaiyadi</div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/20352890.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
      <Row style={{backgroundColor:"#E5E5E5" , margin:"0px" }}>
        <Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
          <LinkElement />
        </Col>
        <Col xs={9} style={{marginTop:"20px"}}>
          <h3 className='page-title'> <span> Showing results for "{EduStatus}" in Ahmedabad Jamaat </span>
          <Button   className="button-downlaod">
          <a  style={{textDecoration:"none" , color:"#ffff" }} href="https://talabulilm.com/profile/csvdownload.php" target = "_blank" > Download full file</a>
           </Button>
          </h3>

          {
            dropoutList && dropoutList.length !== 0 ?  <EducationDetail dropoutList={dropoutList} /> :
            dropoutList && dropoutList.length  === 0 ? <div className='loader-content'>No data found ....</div> :
            <div className='loader-content' >
              <HashLoader color={color} size={78} />
            </div>
          }
        </Col>
      </Row>
    </>
  );
}
