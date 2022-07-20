import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "./AccordionFilter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleNotch , faCheck} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { Accordion, Button, Form, Row } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import useFetch from '../useFetch';


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
   const {jamaatId } = props;
    const [startDate, setStartDate] = useState(new Date());
    const [myTask , setMyTask] = useFetch();
    const [getTaskId , setTaskId] = useState(); 
    const [callMytask , setCallMyTask] = useState(true);
    const [taskData , setTaskData] = useState({
      task_id:"",
      jamaat_id:"",
      sub_text:"",
      sub_date:new Date(),
      sub_file:""
    });

    useEffect(() => {
      if(jamaatId && jamaatId){
        setMyTask(`profile/aamilsaheb/taskList/${jamaatId && jamaatId}`)
      }
  
    },[jamaatId , callMytask ])


    const getToken = localStorage.getItem("profile-token");
    

    const handleSubmit = () => {
      // setCallMyTask(!callMytask);
      fetch('https://www.talabulilm.com/api2022/profile/aamilsaheb/reportUpload', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${getToken}`,
        },
        body: JSON.stringify({
          ...taskData
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        toast.success("Records added successfully");
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Some Error occured while saving the data");
      });
    }

    const handleComment = (e) => {
      setTaskData({...taskData , sub_text: e.target.value})
    }

    const handleChangeData = (date) => {
      setTaskData({...taskData , sub_date: date})
    }

    const handleFile = (e) => {
      setTaskData({...taskData , sub_file:e.target.value })
    }

    


  return (
    <div  className="col-12 px-2 mt-3 " >
      {
        myTask?.map((item, idx) => (

          <Accordion key={idx} onClick={() => setTaskData({...taskData , task_id: item.task_id})} >
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
                  <Form.Group className="p-2  col-12 " controlId="formBasicEmail">
                    <Form.Control as="textarea" placeholder="Leave a comment here" onChange={handleComment} />
                  </Form.Group>

                  <Form.Group className="p-2  col-12 col-md-6" controlId="formBasicEmail">
                    <Form.Label>Attach Report</Form.Label>
                    <div>
                    <input 
                      type="file"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={handleFile} 
                    />
                    </div>
                  </Form.Group>
            
                  <Form.Group className="p-2  col-12  col-md-6" controlId="formBasicPassword">
                    <Form.Label>Date of Barnamaj</Form.Label>
                    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    <DatePicker selected={taskData?.sub_date}  onChange={(date) => handleChangeData(date)} />
                  </Form.Group>
                  <Button   variant="primary"  onClick={  handleSubmit} >
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