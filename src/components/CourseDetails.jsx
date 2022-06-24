import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./CourseDetails.css"

export default function CourseDetails({course, institute, jawab, period})
{
    let courseName = ""
    let instituteName = ""
    courseName = (course.length > 40) ? course.slice(0, 40) + '...' : course
    instituteName = (institute.length > 40) ? institute.slice(0, 40) + '...' : institute
    return (
        <div className={`user-courses-container ${period}`}>
            <div className='course-category'>Future Education</div>
            <div className='course-container'>
                {course ?
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{course}</Tooltip>}>
                    <div className='course-text'>{courseName}</div>
                </OverlayTrigger> :
                <div className='course-text'>---</div>
                }
                {institute ?
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{institute}</Tooltip>}>
                    <div className='course-text'>{instituteName}</div>
                </OverlayTrigger> :
                <div className='course-text'>---</div>
                }
            </div>
            <div className={`jawab-button ${jawab === "" ? "danger-btn" : "success-btn"} ${!course && "hide"}`}>
                {jawab === "" ? "No Araz" : "View Jawab"}
            </div>
        </div>
    )
}