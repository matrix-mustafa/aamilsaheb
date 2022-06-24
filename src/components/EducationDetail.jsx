import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function (props) {

    const {dropoutList} = props;
    console.log(props)

  return (
    <>
    {
        dropoutList &&  dropoutList.map((item) => (
       <div className='user-card'>
         <div className='d-flex'>
           <div className='d-flex' style={{alignItems:"center" , height:"100%" , width:"42%"}} >
             <img src={`https://www.talabulilm.com/mumin_images/${item.its_id}.png`} className="user-img"/>
             <div className='user-details'>
               <p>{item.its_id}</p>
               <p>{item.name}</p>
               <p>{item.gender == 'M' ? 'Male' : 'Female'} {item.age} years</p>
               <p>{item.email}</p>
               <p>{item.mobile}</p>
             </div>
           </div>
     
        <div style={{width:"58%"}} >
         {item.future_edu_course !== " " &&
         <div className='d-flex user-courses-container future'>
           <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Future Education</div>
           <div className='course-container'>
             <div  >
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.future_edu_course}</Tooltip>}>
             <div className='course-text'>
               { item.future_edu_course ? item.future_edu_course.slice(0,40) +  "...." : "No data available"}
             </div>
             </OverlayTrigger>    
             <div className='course-text'>
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.future_edu_course}</Tooltip>}>
             <div className='course-text'>
             { item.future_edu_course ? item.future_edu_institute.slice(0,40) + "...." : "No data available"}
             </div>
             </OverlayTrigger>  
             </div>
             </div>
             {
                item.future_edu_course ?   <div className={`jawab-button ${item.future_edu_jawab === "" ? "danger-btn" : "success-btn"}`}>
                {item.future_edu_jawab === "" ? "No Araz" : "View Jawab"}
              </div> : ""
             }
            
           </div>
         </div>
         }
         {item.current_edu_course !== " " &&
         <div className='d-flex user-courses-container current'>
           <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Current Education</div>
           <div className='course-container'>
             <div>
     
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.current_edu_course}</Tooltip>}>
             <div className='course-text'>
             { item.current_edu_course ? item.current_edu_course.slice(0,40) +  "...." : "No data available"}
             </div>
             </OverlayTrigger> 
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.current_edu_institute}</Tooltip>}>
             <div className='course-text'>
             {item.current_edu_course ? item.current_edu_institute.slice(0,40) + "...." : "No data available"}
             </div>
             </OverlayTrigger> 
             </div>
             {
              item.current_edu_course ?  <div className={`jawab-button ${item.current_edu_jawab === "" ? "danger-btn" : "success-btn"}`}>
              {item.current_edu_jawab === "" ? "No Araz" : "View Jawab"}
            </div> : ""
             }
            
           </div>
         </div>
         }
         {item.last_edu_course !== " " &&
         <div className='d-flex user-courses-container last'>
           <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Last Education</div>
           <div className='course-container'>
             <div  >
               
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.last_edu_institute}</Tooltip>}>
             <div className='course-text'>
             { item.last_edu_institute ? item.last_edu_institute.slice(0,40) +  "...." : "No data available"}
             </div>
             </OverlayTrigger> 
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.last_edu_course}</Tooltip>}>
             <div className='course-text'>
             { item.last_edu_course ? item.last_edu_course.slice(0,40) +  "...." : "No data available"}
             </div>
             </OverlayTrigger> 
             </div>
             {
              item.last_edu_course ?   <div className={`jawab-button ${item.last_edu_jawab === "" ? "danger-btn" : "success-btn"}`}>
              {item.last_edu_jawab === "" ?  "No Araz" : "View Jawab"}
            </div> : ""
             }
           
           </div>
         </div>
         }
         </div>
         </div>
       </div>
         ))
       }
  </>
  )

}
