import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import "./AccordionFilter.css"
import Sidebar from './Sidebar';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

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

function AccordionFilter(props) {
  const [filterText , setFilterText] = useState("Araz Done");
  const {sidebarData , handleRequest , EduStatus, streamData} = props;

  const darkColor = {
    background:"#00336D",
    color:"#fff"
  }

  const handleFiltertext = (text) => {
    setFilterText(text)
  }

  const whiteColor = {
    background:"#EDEDED",
    color:"#000"
  }

  console.log(sidebarData)
  return (
    <div className='hide-in-big'  >
    <Accordion  defaultActiveKey="0">
      <Card>
        <Card.Header style={{display:"flex" , justifyContent:"space-between" }} >
          <CustomToggle eventKey="1">
          <FontAwesomeIcon color={"#fff"} icon={faFilter} />
            Apply Filter</CustomToggle>
            <div className='font-weight-bold'>{filterText}</div>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <div className='sidebar-content'><strong>Raza Status:</strong></div>
      {
      sidebarData && sidebarData?.Raza_Status.map((item, idx) => (
    <div key={idx} className='d-flex '  style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor), borderRadius:"4px" ,padding:"5px", marginBottom:"4px" , cursor:"pointer"}} onClick={() => handleRequest(item.verb , item.label , item.download)}   >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div onClick={() => handleFiltertext(item.label)} >{item.label}</div>
      <Badge bg={EduStatus === item.label  ?"light": 'secondary' } text={EduStatus  === item.label ? "dark" : "light"}>{ item.count}</Badge>
    </div>
    </div>
      ))
    }

    <div className='sidebar-content'><strong>Streams / Marhala:</strong></div>
{
      sidebarData && sidebarData?.Stream.map((item, idx) => (
    <div key={idx} className='d-flex '  style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor), borderRadius:"4px" ,padding:"5px", marginBottom:"4px" , cursor:"pointer"}} onClick={() => handleRequest(item.verb , item.label , item.download)}   >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div onClick={() => handleFiltertext(item.label)} >{item.label}</div>
      <Badge bg={EduStatus === item.label  ?"light": 'secondary' } text={EduStatus  === item.label ? "dark" : "light"}>{ item.count}</Badge>
    </div>
    </div>
      ))
    }


<div className='m-4' >
{
      sidebarData && sidebarData?.main_menu.map((item, idx) => (
    <div key={idx} className='d-flex '  style={{width:"100%" , ...(EduStatus === item.label ? darkColor : whiteColor), borderRadius:"4px" ,padding:"5px", marginBottom:"4px" , cursor:"pointer"}} onClick={() => handleRequest(item.verb , item.label , item.download)}   >
    <div className='d-flex justify-content-between' style={{width:"100%"}} >
     <div onClick={() => handleFiltertext(item.label)} >{item.label}</div>
      <Badge bg={EduStatus === item.label  ?"light": 'secondary' } text={EduStatus  === item.label ? "dark" : "light"}>{ item.count}</Badge>
    </div>
    </div>
      ))
    }
</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    </div>
  );
}


export default AccordionFilter;