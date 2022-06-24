import React from 'react'
import Badge from 'react-bootstrap/Badge';

export default function Sidebar(props) {
    const {sidebarData , handleRequest , EduStatus, streamData} = props;


    const darkColor = {
        background:"#00336D",
        color:"#fff"
      }
      
      const whiteColor = {
        background:"#EDEDED",
        color:"#000"
      }
  return (
    <>
      {
      sidebarData && sidebarData.map((item) => (
    <div className='d-flex '  style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor), borderRadius:"4px" ,padding:"5px", marginBottom:"4px"}} onClick={() => handleRequest(item.verb , item.label)}   >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div>{item.label}</div>
      <Badge bg={EduStatus === item.label  ?"light": 'secondary' } text={EduStatus  === item.label ? "dark" : "light"}>{ item.count}</Badge>
    </div>
    </div>
      ))
    }
    </>
  )
}
