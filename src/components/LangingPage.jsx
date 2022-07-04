import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState , useContext } from 'react';
import useFetch from "../useFetch";
import EducationDetail from './EducationDetail';
import Sidebar from './Sidebar';
import HashLoader from "react-spinners/HashLoader";
import MainNavbar from './MainNavbar';

export default function LandingPage() {
  const [sidebarData  , setSideBarData] = useFetch("profile");
  const [dropoutList , setDropoutList] = useFetch("profile");
  const [EduStatus , setEduStatus] = useState("Araz done");
  const [color, setColor] = useState("#00336D");
  const [downloadRecord , setDownloadRecord] = useState(null);
  const [headerData , setHeaderData] = useFetch("profile/aamilsaheb/details");
  const [userFullName , setUserFullName] = useFetch("");


  const handleRequest = (verb , lable , downlaod) => {
    setDropoutList(`profile/aamilsaheb/${verb}`);
    setEduStatus(lable);
    setDownloadRecord(downlaod);
  }


  useEffect(() => {
    if(headerData && headerData[0].jamaat_id){
      setSideBarData(`profile/aamilsaheb/filters/${headerData && headerData[0].jamaat_id}`);
      setDropoutList(`profile/aamilsaheb/razaUserList/${headerData && headerData[0].jamaat_id}/Araz%20done`)
    }

  },[headerData])


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
      <MainNavbar headerData={headerData}  userFullName={userFullName}/>
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
