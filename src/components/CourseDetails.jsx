import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./CourseDetails.css"

export default function CourseDetails()
{
    return (
        <div className='d-flex user-courses-container future'>
           <div style={{fontWeight:700 , fontSize:"16px" , lineHeight:"19px" , fontFamily:"Inter"}}>Future Education</div>
           <div className='course-container'>
             <div>
             <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{item.future_edu_course}</Tooltip>}>
             <div className='course-text'>
               { item.future_edu_course ? item.future_edu_course.slice(0,40) + "...." : "No data available"}
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
                item.future_edu_course ? <div className={`jawab-button ${item.future_edu_jawab === "" ? "danger-btn" : "success-btn"}`}>
                {item.future_edu_jawab === "" ? "No Araz" : "View Jawab"}
              </div> : ""
             }

           </div>
         </div>
    )
}