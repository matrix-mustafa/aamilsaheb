import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./AccordionFilter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch , faCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';

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
   const {myTask} = props;
    const [startDate, setStartDate] = useState(new Date());

    const SubIdNull = {
      border: "1px solid #FFC107"
    }

    const GetSubId = {
      border: "1px solid #6E777F"
    }

    const textColorMuted = {
      color:"#957B2E"
    }

    const textColorNotMuted = {
      color: "#957B2E"
    }


  return (
    <div  className="col-12 px-5 mt-3 " >
      {
        myTask?.map((item) => (

          <Accordion >
          <Accordion.Item eventKey="0" className='mb-3'   style={{ ...(item.sub_id === null ? SubIdNull: GetSubId)}} >
            <Accordion.Header className='border-bottom border-warning' >
              {
                item.sub_id === null ? <FontAwesomeIcon color={"#957B2E"} icon={faCircleNotch} /> : <FontAwesomeIcon color={"#6E777F"} icon={faCheck} />
              }
             <div className='mx-2' style={{...(item.sub_id === null ? textColorNotMuted: textColorMuted)}}>{item.task_title}</div> 
              </Accordion.Header>
            <Accordion.Body className='p-0' >
              <div className="text-note p-3" style={{...(item.sub_id === null ? textColorNotMuted: textColorMuted)}}  >
                {item.task_description}
              </div>
              <div  className='d-flex col-12 border-top border-warning '  >
                  <div className='col-7 p-3'>
                  <textarea style={{ height:"72px" }} className="form-control" id="its_id_list" required="" name="its_id_list" rows="8" ></textarea>
                  </div>
                  <div className='col-5  py-3'>
                      <div className='d-flex' >
                          <div className='mx-2' >Attach Report</div>
                          <input type="file"  />
                      </div>
                      <div className='d-flex my-2 '>  
                          <div className='mx-2' >Date of Barnamaj</div> 
                          <div style={{width:"27%" }} >
                          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                          </div>
                          <Button className='mx-3' variant="success" >Submit</Button>
                      </div>

                     
                  </div>
             
              </div>
      
            </Accordion.Body>
           
          </Accordion.Item>
        </Accordion>

        ))
      }

   
    </div>
  );
}


export default MyTask;