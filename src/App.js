import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState } from 'react';
import useFetch from "./useFetch";
import EducationDetail from './components/EducationDetail';
import Sidebar from './components/Sidebar';
import HashLoader from "react-spinners/HashLoader";
import logo from "./logotal.png"

export default function App() {
  const [sidebarData  , setSideBarData] = useFetch("https://www.talabulilm.com/api2022/profile/aamilsaheb/filters/170");
  const [dropoutList , setDropoutList] = useFetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/dropOutUserList/170');
  const [EduStatus , setEduStatus] = useState("Drop Outs");
  let [color, setColor] = useState("#00336D");

  

  const handleRequest = (verb , lable) => {
    setDropoutList(`api2022/profile/aamilsaheb/${verb}`);
    setEduStatus(lable);

  }

  const onLoad = {
    height: "100vh"
  }

  console.log(sidebarData)
  // console.log(dropoutList)

  return (
    <>
      <Navbar style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
          <img className="" src={logo} alt='img' />
            <div className='d-flex'>
              <div className="image-header" >Mulla Mustafa bhai Shaikh Shabbir bhai Rampurawala</div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/50476733.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
      <Row style={{backgroundColor:"#E5E5E5" , margin:"0px" , ...(!sidebarData ? onLoad : "") }}>
        <Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
          {sidebarData ?
          <>
            <div className='m-4' >
              <Sidebar sidebarData={sidebarData.main_menu} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Stream:</div>
              <Sidebar sidebarData={ sidebarData.Stream} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Raza:</div>
              <Sidebar sidebarData={sidebarData.Raza_Status} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Quran Sanad:</div>
              <Sidebar sidebarData={sidebarData.Quran_Sanad} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>
          </> :
          <div className='loader-content' >
            <HashLoader color={color} size={30} />
          </div>
          }
        </Col>
        <Col xs={9} style={{marginTop:"20px"}}>
          <h3 className='page-title'> <span> Showing results for "{EduStatus}" in Surat Jamaat </span> 
          <Button   className="button-downlaod">
          <a  style={{textDecoration:"none" , color:"#ffff" }} href="https://talabulilm.com/profile/csvdownload.php" target = "_blank" > Downlaod full file</a> 
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
