import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';

function App() {
  
const [sidebarData  , setSideBarData] = useState();

  useEffect(() => {
    fetch(`https://www.talabulilm.com/profileapi/aamilsaheb/filters/170`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Basic NTA0NzY3MzM6YzY2NTg3MmI3MTkzNTQxMTMwZTg5ZDJlY2JjOGRjMzM=`,
      },
    } , [])
    .then((response) => response.json())
    .then((result) => {
      setSideBarData(result)
    })
    .catch((error) => {
      console.log(error)
    }) 

  }, []);

  console.log("")

  return (
    <>
    <Navbar   style={{backgroundColor:"#002147" }} >
      <Container fluid >
        <div style={{width:"40%"}} ></div>
      <div className="d-flex justify-content-around" style={{width:"100%" , color:"#fff" , alignItems:"center"}} >
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
    <div className='d-flex ' style={{width:"100%" , backgroundColor:"#00336D", color:"#fff" , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div>{sidebarData ? Object.keys(sidebarData)[0] : ""}</div> 
      <Badge bg="secondary">{ sidebarData ?  Object.values(sidebarData)[0] : ""}</Badge>
    </div>
    </div>

    <div className='d-flex ' style={{width:"100%" , backgroundColor:"#EDEDED", color:"#000" , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div>{ sidebarData ? Object.keys(sidebarData)[1] : ""}</div> 
      <Badge bg="secondary">{ sidebarData ? Object.values(sidebarData)[1] : ''}</Badge>
    </div>
    </div>

    <div className='d-flex ' style={{width:"100%" , backgroundColor:"#EDEDED", color:"#000" , borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div>{ sidebarData?  Object.keys(sidebarData)[2] : ""}</div> 
      <Badge bg="secondary">{sidebarData ? Object.values(sidebarData)[2] :""}</Badge>
    </div>
    </div>
  </div>

  <div className='m-4' >
    <div style={{  color:"#000" , borderBottom:"1px solid #000" , padding:"5px"}} >
      Stream:
    </div>
    <div style={{backgroundColor:"#EDEDED ", color:"#000" , borderRadius:"4px" , padding:"5px" ,  marginBottom:"4px"}}>
      Migrated outs
    </div>
    <div style={{backgroundColor:"#EDEDED ", color:"#000" , borderRadius:"4px" , padding:"5px" ,  marginBottom:"4px"}}>
      Migrated in
    </div>
  </div>

  <div className='m-4' >
    <div style={{  color:"#000" , borderBottom:"1px solid #000" , padding:"5px"}} >
      Raza:
    </div>
    <div style={{backgroundColor:"#EDEDED ", color:"#000" , borderRadius:"4px" , padding:"5px" ,  marginBottom:"4px"}}>
      Migrated outs
    </div>
    <div style={{backgroundColor:"#EDEDED ", color:"#000" , borderRadius:"4px" , padding:"5px" ,  marginBottom:"4px"}}>
      Migrated in
    </div>
  </div>
</Col>
<Col xs={9} style={{marginTop:"20px"}}  >
  <div style={{backgroundColor:"#E2E7EC" , width:"858px", height:"153px" , border:"0.5px solid #000000" , borderRadius:"4px"}} >
    <div className='d-flex' >
   <div className='d-flex' style={{alignItems:"center" , height:"100%" , width:"40%"}} >
     <div style={{width:"89px", height:"97px" , border:"0.5px solid #000000" , margin:"15px"}} >
       img
     </div>
     <div style={{fontWeight:700, fontSize:"14px", lineHeight:"17px" , fontFamily:"Inter" , color:"#00336D" , lineHeight:"17px"}} >
       <div>
       Mulla Moizbhai Shaikh Alazharbhai Nasir
       </div>
       <div>
       Male 25 years
       </div>
       <div>
       moiznasir@gmail.com
       </div>
       <div>
       +919876543210
       </div>
     </div>
     <div>
    
   </div>
  
   </div>

   <div style={{width:"60%"}} >
     <div className='d-flex' style={{justifyContent:"space-around"  , border: "0.5px solid #5A7651" , alignItems:"center" , padding:"10px 2px 9px 2px" , background: "#BFE2B2"}}>
      <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Future Education</div>
      <div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}} >
        Masters in Business Management
        </div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}}>
        South Gujarat University
        </div>
        </div>
        <div style={{background: "#6F6B1F" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>No Araz</div>
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
        <div style={{background: "#6B3B26" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}}>No Araz</div>
     </div>

     <div className='d-flex' style={{justifyContent:"space-around"  , border: "0.5px solid #5A7651" , alignItems:"center" , padding: "10px 2px 8px 2px" , background: "#E2C9B2"}}>
      <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Future Education</div>
      <div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}} >
        Masters in Business Management
        </div>
        <div style={{fontWeight:700 , fontSize:"12px" , lineHeight:"15px" , fontFamily:"Inter"}}>
        South Gujarat University
        </div>
        </div>
        <div style={{background: "#315A23" , padding:"5px 15px 5px 15px" , color:"#fff" , fontSize:"10px" , fontWeight:700 , lineHeight:'12px' , fontFamily: 'Inter'}} >No Araz</div>
     </div>
    </div>

    
   
    
    </div>

  </div>
</Col>
</Row>
</>
  );
}

export default App;
