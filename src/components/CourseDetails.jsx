import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./CourseDetails.css"

export default function CourseDetails({course, institute, jawab, period, title})
{
    const openJawab = url => {
        window.open(`https://www.talabulilm.com/araiz/araz_jawab.php?code=${url}`, '_blank', 'noopener,noreferrer');
    };
    let courseName = ""
    let instituteName = ""
    courseName = (course.length > 30) ? course.slice(0, 30) + '...' : course
    instituteName = (institute.length > 30) ? institute.slice(0, 30) + '...' : institute
    return (
        <div className={`user-courses-container ${period}`}>
            <div className='course-category'>{title}</div>
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
            {jawab !== "" ?
            <div className={`jawab-button success-btn`} onClick={() => openJawab(jawab)}>View Jawab</div> :
            <div className={`jawab-button danger-btn cursor-block ${!course && "hide"}`}>No Araz</div>
            }
        </div>
    )
}