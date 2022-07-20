import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState  } from 'react';
import EducationDetail from './EducationDetail';
import Sidebar from './Sidebar';
import HashLoader from "react-spinners/HashLoader";
import AccordionFilter from './AccordionFilter';

export default function LandingPage(props) {
  const {sidebarData , dropoutList  , EduStatus , downloadRecord , handleRequest, jamaatId} = props;
  const [color, setColor] = useState("#00336D");

  const onLoad = {
    height: "100vh"
  }

  const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]
  const today = new Date()
  const month = monthNames[today.getMonth()]
  const currentDate = month + ', ' + today.getFullYear();
  return (
    <>

      <Row style={{backgroundColor:"#E5E5E5" , margin:"0px" , ...(!sidebarData ? onLoad : "") }}>
        <Col className='sidebarMedia mt-1'  xs={3} style={{backgroundColor:"#fff"}}>

          {sidebarData ?
          <>
            <div className='m-4' >
              <div className='sidebar-content'><strong>Raza Status:</strong></div>
              <Sidebar sidebarData={sidebarData.Raza_Status} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className={`m-4 ${Array.isArray(sidebarData.Stream) && sidebarData.Stream.length > 0 ? '' : 'd-none'}`} >
              <div className='sidebar-content'><strong>Streams / Marhala:</strong></div>
              <Sidebar sidebarData={ sidebarData.Stream} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'><strong>Other Categories:</strong></div>
              <Sidebar sidebarData={sidebarData.main_menu} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
            <a className='btn-download' style={{position:"static"}} href={`https://talabulilm.com/profile/csvdownload.php?jamaat=${jamaatId}`} target = "_blank" > Download All Record</a>
            </div>


            {/* <div className='m-4' >
              <div className='sidebar-content'>Quran Sanad:</div>
              <Sidebar sidebarData={sidebarData.Quran_Sanad} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div> */}
          </> :
          <div className='loader-content' >
            <HashLoader color={color} size={30} />
          </div>
          }


        </Col>
        {
      sidebarData ?
      <AccordionFilter sidebarData={sidebarData} handleRequest={handleRequest} EduStatus={EduStatus}/>
        : <div className='loader-content text-center mt-5 d-block d-sm-none' >
        <HashLoader  size={30} />
         </div>
        }

        <Col xs={12} lg={9} className='main-content mt-1'>
          <h3 className='page-title'>
            Showing results for "{EduStatus}" as of {currentDate}
          </h3>
          <div className='explaination-box d-none d-sm-block'>
            <p><strong>Note:</strong> All the data displayed on this page is fetched from the Araiz mumineen send to Hadrat Aaliyah for their Education, and through the Educational Profile where mumineen update their data.
Any discrepancy in this data can be resolved through www.talabulilm.com/profile. Mumineen will be able to edit or remove any incorrect data. Currently, Amil saheb will not be able to delete any incorrect entries. But, Amil saheb can add data/survey of students whose data is incomplete through the Education Survey tab</p>
            {(EduStatus === 'Migrated In for current education' || EduStatus === 'Migrated Out for current education') &&
            <p>The data displayed on this page consists of Student's who have migrated from other cities to the Cluster that your mauze belongs to. It cannot be determined that which insitute belongs to which Mohalla or Mauze, therefore Talabulilm has created Clusters of citites that are geographically very close to the insitutes. And all these insitutes are tagged with its respective clusters. The results currently displayed will be shown to all mawaze in your Cluster</p>
            }
          </div>
          <a className='btn-download' href={`https://talabulilm.com/profile/csvdownload.php${downloadRecord}`} target = "_blank" > Download</a>
          {
            dropoutList && dropoutList.length !== 0 ?  <EducationDetail dropoutList={dropoutList} /> :
            dropoutList && dropoutList.length  === 0 ? <div className='loader-content'>No data found ....</div> :
            <div className='loader-content' >
              <HashLoader color={color} size={78} />
            </div>
          }
        </Col>
      </Row>
    </>
  );
}
