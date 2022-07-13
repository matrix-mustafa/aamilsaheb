import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import "./AccordionFilter.css"
import Sidebar from './Sidebar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch , faCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <>

    <button
      type="button"
      style={{ backgroundColor: '#00336D' , color:"#fff" , borderRadius:"5px" , textDecoration:"none"  }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
    </>
  );
}

function MyTask(props) {
    const [startDate, setStartDate] = useState(new Date());


  return (
    <div style={{marginLeft:"70px" , marginTop:"50px" }} className="col-10" >

    <Accordion style={{}} >
    <Accordion.Item eventKey="0" style={{marginBottom:"20px" , border: "1px solid #FFC107"}} >

      <Accordion.Header>
      <FontAwesomeIcon color={"#FFC107"} icon={faCircleNotch} />
       <div className='mx-2' >This is a pending Task with the open body</div> 
        </Accordion.Header>
      <Accordion.Body>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <div className='d-flex col-12' style={{border:"1px soild #000" }}  >
            <div className='col-7'>
            <textarea style={{ height:"72px" }} className="form-control" id="its_id_list" required="" name="its_id_list" rows="8" ></textarea>
            </div>
            <div className='col-5 mx-3'>
                <div className='d-flex' >
                    <div className='mx-2' >Attach Report</div>
                    <input type="file"  />
                </div>
                <div className='d-flex my-2 '>
                    <div className='mx-2' >Date of Barnamaj</div> 
                    <div style={{width:"27%" }} >
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
            </div>
       
        </div>

      </Accordion.Body>
     
    </Accordion.Item>
    <Accordion.Item eventKey="1" style={{marginBottom:"20px" , border: "1px solid #6E777F"}} >
      <Accordion.Header>
      <FontAwesomeIcon color={"#6E777F"} icon={faCheck} />
      <div className='mx-2' > This is a Completed Task with the closed body</div>
        </Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    </div>
  );
}


export default MyTask;