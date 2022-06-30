import LinkElement from "./LinkElement"
import useFetch from "../../useFetch";

export default function Sidebar () {
    const [sidebarData  , setSideBarData] = useFetch("https://www.talabulilm.com/api2022/profile/aamilsaheb/filters/170");
    const handleRequest = (verb , lable) => {
        setDropoutList(`api2022/profile/aamilsaheb/${verb}`);
        setEduStatus(lable);
    }

    return (
        <>
        {sidebarData ?
          <>
            <div className='m-4' >
              <div className='sidebar-content'>Stream:</div>
              <LinkElement sidebarData={ sidebarData.Stream} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <div className='sidebar-content'>Raza:</div>
              <LinkElement sidebarData={sidebarData.Raza_Status} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            <div className='m-4' >
              <LinkElement sidebarData={sidebarData.main_menu} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div>

            {/* <div className='m-4' >
              <div className='sidebar-content'>Quran Sanad:</div>
              <LinkElement sidebarData={sidebarData.Quran_Sanad} handleRequest={handleRequest} EduStatus={EduStatus}/>
            </div> */}
          </> :
          <div className='loader-content' >
            <HashLoader color={color} size={30} />
          </div>
          }
        </>
    )
}