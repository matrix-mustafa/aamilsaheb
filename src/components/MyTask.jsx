import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./AccordionFilter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch , faCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { Accordion, Button, Form, Row } from 'react-bootstrap'
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

  return (
    <div  className="col-12 px-2 mt-3 " >
      {
        myTask?.map((item, idx) => (

          <Accordion key={idx}>
          <Accordion.Item eventKey="0" className={`mb-2 ${item.sub_id === null ? 'border-warning' : 'border-success'}`} >
            <Accordion.Header className='border-bottom' >
              {
                item.sub_id === null ? <FontAwesomeIcon color={"#F7D47F"} icon={faCircleNotch} /> : <FontAwesomeIcon color={"#198753"} icon={faCheck} />
              }
             <div className={`mx-2 ${item.sub_id === null ? 'text-warning' : 'text-success'}`}>{item.task_title}</div>
              </Accordion.Header>
            <Accordion.Body className='p-0' >
              <div className="text-muted p-3" >
              <div dangerouslySetInnerHTML={{__html: item.task_description}} />
              </div>
              <div className=' border-top' >
                {
                  item.sub_id === null ?   <Form>
                  <Row className='m-2' >
                  <Form.Group className="p-2  col-12 col-md-6" controlId="formBasicEmail">
                    <Form.Label>Attach Report</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                  </Form.Group>
            
                  <Form.Group className="p-2  col-12  col-md-6" controlId="formBasicPassword">
                    <Form.Label>Date of Barnamaj</Form.Label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                  </Form.Group>
                  <Button   variant="primary" type="submit">
                    Submit
                  </Button>
                  </Row>
                </Form> : ""
                }
   
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