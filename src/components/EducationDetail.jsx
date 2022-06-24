import React from 'react'
import CourseDetails from './CourseDetails';

export default function EducationDetail (props) {
  const {dropoutList} = props;
  return (
    <>
    {
        dropoutList && dropoutList.map((item, idx) => (
       <div key={idx} className='user-card'>
         <div className='d-flex'>
           <div className='d-flex' style={{alignItems:"center" , height:"100%" , width:"42%"}} >
             <img src={`https://www.talabulilm.com/mumin_images/${item.its_id}.png`} alt="user" className="user-img"/>
             <div className='user-details'>
               <p>{item.its_id}</p>
               <p>{item.name}</p>
               <p>{item.gender.toLowerCase() === 'm' ? 'Male' : 'Female'} {item.age} years</p>
               <p>{item.email}</p>
               <p>{item.mobile}</p>
             </div>
           </div>

        <div style={{width:"58%"}} >
          <CourseDetails
            course={item.future_edu_course}
            institute={item.future_edu_institute}
            jawab={item.future_edu_jawab}
            period={'future'}
            title={"Future Education"}
          />
          <CourseDetails
            course={item.current_edu_course}
            institute={item.current_edu_institute}
            jawab={item.current_edu_jawab}
            period={'current'}
            title={"Current Education"}
          />
          <CourseDetails
            course={item.last_edu_course}
            institute={item.last_edu_institute}
            jawab={item.last_edu_jawab}
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
