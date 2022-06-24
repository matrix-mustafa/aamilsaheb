import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import useFetch from "./useFetch";
import EducationDetail from './components/EducationDetail';
import Sidebar from './components/Sidebar';
import HashLoader from "react-spinners/HashLoader";

function App() {
const [sidebarData  , setSideBarData] = useState(null);
const [streamData , setStreamData] = useState(null);
const [dropoutList , setDropoutList] = useFetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/dropOutUserList/170');
const [razaData , setRazaData] = useState(null);
const [quranSanad , setquranSanad] = useState(null);
const [EduStatus , setEduStatus] = useState("Drop Outs");
let [color, setColor] = useState("#00336D");


useEffect(() => {
    fetch(`https://www.talabulilm.com/api2022/profile/aamilsaheb/filters/170`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Basic NTA0NzY3MzM6YzY2NTg3MmI3MTkzNTQxMTMwZTg5ZDJlY2JjOGRjMzM=`,
      },
    } , [])
    .then((response) => response?.json())
    .then((result) => {
      setSideBarData(result.main_menu)
      setStreamData(result.Stream)
      setRazaData(result.Raza_Status)
      setquranSanad(result.Quran_Sanad)

    })
    .catch((error) => {
      console.log(error)
    })

  }, []);


  const handleRequest = (verb , lable) => {
    console.log(verb , lable)
    setDropoutList(`api2022/profile/aamilsaheb/${verb}`);
    setEduStatus(lable);
    
  }


  const onLoad = {
    height: "100vh"
  }

  console.log( dropoutList && dropoutList.length)


  return (
    <>
    <Navbar   style={{backgroundColor:"#002147" }} >
      <Container fluid >
        <div style={{width:"40%"}} ></div>
      <div className="d-flex justify-content-around" style={{width:"100%" , color:"#fff" , alignItems:"center" , cursor:"pointer" }} >
        <div  style={{fontWeight:700 , fontSize:"18px" , lineHeight:"24px" , fontFamily:"Inter"}} >Live Education Status of Surat Jamaat (Age: 3-27)</div>
        <div className='d-flex'>
      <div className="p-2 " style={{fontWeight:700 , fontSize:"14px" , lineHeight:"17px" , fontFamily:"Roboto"}}>Flex item 1</div>
      <img src='' />
        </div>
    </div>
      </Container>
    </Navbar>
<Row style={{backgroundColor:"#E5E5E5" , margin:"0px" , ...(!sidebarData ? onLoad : "") }} >
<Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
  {
     sidebarData  ?
     <>
       <div className='m-4' >
     <Sidebar sidebarData={sidebarData} handleRequest={handleRequest} EduStatus={EduStatus}/>
 </div>

 <div className='m-4' >
   <div className='sidebar-content' >
     Stream:
   </div>
   <Sidebar sidebarData={streamData} handleRequest={handleRequest} EduStatus={EduStatus}/>
 </div>

 <div className='m-4' >
   <div className='sidebar-content'  >
     Raza:
   </div>
   <Sidebar sidebarData={razaData} handleRequest={handleRequest} EduStatus={EduStatus}/>
 </div>

 <div className='m-4' >
   <div className='sidebar-content' >
   Quran Sanad:
   </div>
   <Sidebar sidebarData={quranSanad} handleRequest={handleRequest} EduStatus={EduStatus}/>
 </div>  </> :
 <div className='loader-content' >
   <HashLoader color={color} size={30} />
 </div>

  }

</Col>
<Col xs={9} style={{marginTop:"20px"}}  >
   <h5>Showing results for "{EduStatus}" in Surat Jamaat</h5>
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

export default App;