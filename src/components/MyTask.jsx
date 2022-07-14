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
                {item.task_description}
              </div>
              <div className='row border-top' >
    <Form>
      <Row>
      <Form.Group className="p-2 col-12 col-md-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="p-2 col-12 col-md-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Row>
    </Form>
                  <div className='col-12 col-md-7'>
                    <textarea style={{ height:"72px" }} className="form-control" id="its_id_list" required="" name="its_id_list" rows="8" ></textarea>
                  </div>
                  <div className='col-12 col-md-5'>
                    <div className='row'>
                      <div className='col-12 col-md-6' >
                          <div className='mx-2' >Attach Report</div>
                          <input type="file" />
                      </div>
                      <div className='col-12 col-md-6'>
                        <div className='mx-2' >Date of Barnamaj</div>
                        <div>
                          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                          <Button className='mx-3' variant="success" >Submit</Button>
                        </div>
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