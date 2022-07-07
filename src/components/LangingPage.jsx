import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState  } from 'react';
import EducationDetail from './EducationDetail';
import Sidebar from './Sidebar';
import HashLoader from "react-spinners/HashLoader";

export default function LandingPage(props) {
  const {sidebarData , dropoutList  , EduStatus , downloadRecord , handleRequest} = props;
  const [color, setColor] = useState("#00336D");


  const onLoad = {
    height: "100vh"
  }


  const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]
  const today = new Date()
  const month = monthNames[today.getMonth()]
  const currentDate = month + ', ' + today.getFullYear();
  return (
    <>
     
      <Row style={{backgroundColor:"#E5E5E5" , margin:"0px" , ...(!sidebarData ? onLoad : "") }}>
        <Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
          {sidebarData ?
          <>
            <div className='m-4' >
              <div className='sidebar-content'>Raza:</div>
              <Sidebar sidebarData={sidebarData.Raza_Status} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Stream:</div>
              <Sidebar sidebarData={ sidebarData.Stream} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <Sidebar sidebarData={sidebarData.main_menu} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>
              
            <div className='m-4' >
            <a className='btn-download' style={{position:"static"}} href={`https://talabulilm.com/profile/csvdownload.php`} target = "_blank" > Download All Record</a>
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
        <Col xs={9} className='main-content' style={{marginTop:"20px"}}>
          <h3 className='page-title'>
            Showing results for "{EduStatus}" as of {currentDate}
          </h3>
          <a className='btn-download' href={`https://talabulilm.com/profile/csvdownload.php${downloadRecord}`} target = "_blank" > Download</a>
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
