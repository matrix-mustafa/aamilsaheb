import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState , useContext } from 'react';
import useFetch from "../useFetch";
import EducationDetail from './EducationDetail';
import Sidebar from './Sidebar';
import HashLoader from "react-spinners/HashLoader";
import logo from "../logotal.png";

export default function LandingPage() {
  const [sidebarData  , setSideBarData] = useFetch();
  const [dropoutList , setDropoutList] = useFetch();
  const [EduStatus , setEduStatus] = useState("Drop Outs");
  const [color, setColor] = useState("#00336D");
  const [downloadRecord , setDownloadRecord] = useState(null);
  const [headerData , setHeaderData] = useFetch("aamilsaheb/details");
  const [userFullName , setUserFullName] = useFetch("");

  const userName =  localStorage.getItem("username");

  const handleRequest = (verb , lable , downlaod) => {
    setDropoutList(`aamilsaheb/${verb}`);
    setEduStatus(lable);
    setDownloadRecord(downlaod);
  }

  useEffect(() => {
    if(headerData && headerData[0].jamaat_id){
      setSideBarData(`aamilsaheb/filters/${headerData && headerData[0].jamaat_id}`);
      setDropoutList(`aamilsaheb/dropOutUserList/${headerData && headerData[0].jamaat_id}`)
    }

  },[headerData])


  const onLoad = {
    height: "100vh"
  }

  return (
    <>
      <Navbar style={{backgroundColor:"#002147" , height: "120px" }} >
        <Container fluid >
          <div className="d-flex justify-content-between nav-container">
          <img className="" src={logo} alt='img' />
          <div>Current Education Status of {`${headerData && headerData[0]?.jamaat}`} Jamaat (Age: 3-27)</div>
            <div className='d-flex'>
              <div className="image-header" >
                {userFullName?.name}<br />
                <a href='https://www.talabulilm.com/1443Shehrullah/' target={'_blank'}>Mamureen Page</a>
              </div>
              <img className='image-content' src={`https://www.talabulilm.com/mumin_images/${userName}.png`} alt='img' />
            </div>
          </div>
        </Container>
      </Navbar>
      <Row style={{backgroundColor:"#E5E5E5" , margin:"0px" , ...(!sidebarData ? onLoad : "") }}>
        <Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
          {sidebarData ?
          <>
            <div className='m-4' >
              <div className='sidebar-content'>Stream:</div>
              <Sidebar sidebarData={ sidebarData.Stream} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Raza:</div>
              <Sidebar sidebarData={sidebarData.Raza_Status} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <Sidebar sidebarData={sidebarData.main_menu} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            {/* <div className='m-4' >
              <div className='sidebar-content'>Quran Sanad:</div>
              <Sidebar sidebarData={sidebarData.Quran_Sanad} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div> */}
          </> :
          <div className='loader-content' >
            <HashLoader color={color} size={30} />
          </div>
          }
        </Col>
        <Col xs={9} style={{marginTop:"20px"}}>
          <h3 className='page-title'> <span> Showing results for "{EduStatus}" in {`${headerData && headerData[0]?.jamaat}`} Jamaat </span>
          <Button   className="button-downlaod">
          <a  style={{textDecoration:"none" , color:"#ffff" }} href={`https://talabulilm.com/profile/csvdownload.php${downloadRecord}`} target = "_blank" > Downlaod</a>
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
