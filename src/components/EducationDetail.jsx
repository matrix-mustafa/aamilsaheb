import React from 'react'
import CourseDetails from './CourseDetails';
import "./EducationDetail.css"

export default function EducationDetail (props) {
  const {dropoutList} = props;
  return (
    <>
    {
        dropoutList && dropoutList.map((item, idx) => (
       <div key={idx} className='user-card'>
         <div className='user-card-content'>
           <div className='d-flex' style={{alignItems:"center" , height:"100%" , width:"42%"}} >
             <img src={`https://www.talabulilm.com/mumin_images/${item.its_id}.png`} alt="user" className="user-img"/>
             <div className='user-details'>
               <p>{item.its_id}</p>
               <p>{item.name}</p>
               <p>{item.gender.toLowerCase() === 'm' ? 'Male' : 'Female'} {item.age} years</p>
               <p>{item.email}</p>
               <p>{item.mobile}</p>
               <p><strong>Jamaat:</strong> {item.jamaat}</p>
               <p><strong>Current City:</strong> {item.current_edu_city}</p>
             </div>
           </div>

        <div className='study-history' >
          <CourseDetails
            course={item.future_edu_course}
            institute={item.future_edu_institute}
            jawab={item.future_edu_jawab}
            startDate={item.future_edu_course_start_date}
            endDate={item.future_edu_course_end_date}
            period={'future'}
            title={"Future Education"}
          />
          <CourseDetails
            course={item.current_edu_course}
            institute={item.current_edu_institute}
            jawab={item.current_edu_jawab}
            startDate={item.current_edu_course_start_date}
            endDate={item.current_edu_course_end_date}
            period={'current'}
            title={"Current Education"}
          />
          <CourseDetails
            course={item.last_edu_course}
            institute={item.last_edu_institute}
            jawab={item.last_edu_jawab}
            startDate={item.last_edu_course_start_date}
            endDate={item.last_edu_course_end_date}
            period={'last'}
            title={"Last Education"}
          />
         </div>
         </div>
       </div>
         ))
       }
  </>
  )

}
