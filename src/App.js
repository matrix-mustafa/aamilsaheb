import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import useFetch from "./useFetch";

function App() {

const [sidebarData  , setSideBarData] = useState(null);
const [streamData , setStreamData] = useState(null);
const [dropoutList , setDropoutList] = useFetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/dropOutUserList/170');
const [razaData , setRazaData] = useState(null);
const [quranSanad , setquranSanad] = useState(null);
const [active , setActive] = useState(0);
const [streamActive , setStreamActive] = useState(null);
const [EduStatus , setEduStatus] = useState("Drop Outs");


  useEffect(() => {
    fetch(`https://www.talabulilm.com/api2022/profile/aamilsaheb/filters/170`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Basic NTA0NzY3MzM6YzY2NTg3MmI3MTkzNTQxMTMwZTg5ZDJlY2JjOGRjMzM=`,
      },
    } , [])
    .then((response) => response.json())
    .then((result) => {
      // console.log(result)
      setSideBarData(result.main_menu)
      setStreamData(result.Stream)
      setRazaData(result.Raza_Status)
      setquranSanad(result.Quran_Sanad)

      // console.log()
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

const darkColor = {
  background:"#00336D",
  color:"#fff"
}

const whiteColor = {
  background:"#EDEDED",
  color:"#000"
}

console.log(dropoutList)

  return (
    <>
    <Navbar   style={{backgroundColor:"#002147" }} >
      <Container fluid >
        <div style={{width:"40%"}} ></div>
      <div className="d-flex justify-content-around" style={{width:"100%" , color:"#fff" , alignItems:"center" , cursor:"pointer" }} >
        <div  style={{fontWeight:700 , fontSize:"18px" , lineHeight:"24px" , fontFamily:"Inter"}} >Talabulilm Aamil Saheb Dashboard - Surat Jamaat</div>
        <div className='d-flex'>
      <div className="p-2 " style={{fontWeight:700 , fontSize:"14px" , lineHeight:"17px" , fontFamily:"Roboto"}}>Flex item 1</div>
      <img src='' />
        </div>
    </div>
      </Container>
    </Navbar>
<Row style={{backgroundColor:"#E5E5E5" , margin:"0px"}} >
<Col xs={3} style={{backgroundColor:"#fff" , marginTop:"20px"}}>
  <div className='m-4' >

    {
      sidebarData && sidebarData.map((item) => (
    <div className='d-flex '  style={{width:"100%" , ...(EduStatus === item.lable ? darkColor : whiteColor), borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} onClick={() => handleRequest(item.verb , item.lable)}   >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div>{item.lable}</div>
      <Badge bg={EduStatus === item.lable  ?"light": 'secondary' } text={EduStatus  === item.lable ? "dark" : "light"}>{ item.count}</Badge>
    </div>
    </div>
      ))
    }
  </div>

  <div className='m-4' >
    <div style={{  color:"#000" , borderBottom:"1px solid #000" , padding:"5px"}} >
      Stream:
    </div>
    { streamData && streamData.map((item) => (
   <div className='d-flex ' style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor) , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} onClick={() => handleRequest(item.verb , item.label)}>
   <div className='d-flex justify-content-between' style={{width:"100%"}} >
    <div>{item.label}</div>
     <Badge bg={EduStatus === item.label ?"light": 'secondary' } text={EduStatus === item.label ? "dark" : "light"}>{item.count}</Badge>
   </div>
   </div>
    )
    )}
  </div>

  <div className='m-4' >
    <div style={{  color:"#000" , borderBottom:"1px solid #000" , padding:"5px"}} >
      Raza:
    </div>
    { razaData && razaData.map((item) => (
   <div className='d-flex ' onClick={() => handleRequest(item.verb , item.label)} style={{width:"100%" ,...(EduStatus === item.label ? darkColor : whiteColor) , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} >
   <div className='d-flex justify-content-between' style={{width:"100%"}} >
    <div>{item.label}</div>
     <Badge bg={EduStatus === item.label ?"light": 'secondary'  } text={EduStatus === item.label ? "dark" : "light"}>{item.count}</Badge>
   </div>
   </div>
    )
    )}
  </div>

  <div className='m-4' >
    <div style={{  color:"#000" , borderBottom:"1px solid #000" , padding:"5px"}} >
    Quran Sanad:
    </div>
    { quranSanad && quranSanad.map((item) => (
   <div className='d-flex ' style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor) , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} onClick={() => handleRequest(item.verb , item.label)} >
   <div className='d-flex justify-content-between' style={{width:"100%"}} >
    <div>{item.label}</div>
     <Badge bg={EduStatus === item.label ?"light": 'secondary'} text={EduStatus === item.label ? "dark" : "light"}>{item.count}</Badge>
   </div>
   </div>
    )
    )}
  </div>
</Col>
<Col xs={9} style={{marginTop:"20px"}}  >
   <h5>Showing results for "{EduStatus}" in Surat Jamaat</h5>
  {
   dropoutList &&  dropoutList.map((item) => (
  <div style={{backgroundColor:"#E2E7EC" , width:"858px", height:"153px" , border:"0.5px solid #000000" , borderRadius:"4px" , marginBottom:"20px"}} >
    <div className='d-flex' >
   <div className='d-flex' style={{alignItems:"center" , height:"100%" , width:"50%"}} >
     <div style={{width:"89px", height:"97px" , margin:"15px"}} >
       <img src={`https://www.talabulilm.com/mumin_images/${item.its_id}.png`} style={{ border:"0.5px solid #000000" }}/>
     </div>
     <div style={{fontWeight:700, fontSize:"14px", lineHeight:"17px" , fontFamily:"Inter" , color:"#00336D" , lineHeight:"17px"}} >
       <div>
        {item.name}
       </div>
       <div>
       Male {item.age} years
       </div>
       <div>
       {item.email}
       </div>
       <div>
       {item.mobile}
       </div>
     </div>
     <div>

   </div>

   </div>

   <div style={{width:"50%"}} >
     <div className='d-flex' style={{justifyContent:"space-around"  , border: "0.5px solid #5A7651" , alignItems:"center" , padding:"10px 2px 9px 2px" , background: "#BFE2B2"}}>
     <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Current Education</div>
     <div>
       <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}} >
       Masters in Business Management
       </div>
       <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}}>
       South Gujarat University
       </div>
       </div>
       {
        item.current_edu_jawab === " " ? <div style={{background: "#6B3B26" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>No Araz</div> : <div style={{background: "#315A23" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>view Araz</div>
       }
       
    </div> 
     <div className='d-flex' style={{justifyContent:"space-around"  , border: "0.5px solid #5A7651" , alignItems:"center" , padding:"10px 2px 8px 2px" , background: "#E2E0B2"}}>
      <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Future Education</div>
      <div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}} >
        Masters in Business Management
        </div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}}>
        South Gujarat University
        </div>
        </div>
        {
          item.future_edu_jawab === "" ? <div style={{background: "#6B3B26" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>No Araz</div> : <div style={{background: "#315A23"  , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>No Araz</div>
        }
        
     </div>
     <div className='d-flex' style={{justifyContent:"space-around"  , border: "0.5px solid #5A7651" , alignItems:"center" , padding: "10px 2px 8px 2px" , background: "#E2C9B2"}}>
      <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Last Education</div>
      <div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}} >
        {item.last_edu_course}
        </div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}}>
        {item.last_edu_institute}
        </div>
        </div>
        {item.last_edu_jawab === "" ?  <div style={{background: "#6B3B26" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}} >No Araz</div> : <div style={{background: "#315A23" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}} >View Araz</div> }
     </div>
    </div>
    </div>
  </div>
    ))
  }
</Col>
</Row>
</>
  );
}

export default App;