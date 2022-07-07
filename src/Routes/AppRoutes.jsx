import {  BrowserRouter ,  Routes, Route } from "react-router-dom";
import React , { useEffect , useState} from 'react';
import LandingPage from '../components/LangingPage';
import { Buffer } from "buffer";
import MuzeProfileForm from "../components/MuzeProfileForm";
import useFetch from "../useFetch";
import { ToastContainer } from "react-toastify";
import MainNavbar from "../components/MainNavbar";

export default function AppRoutes() {
  const [sidebarData  , setSideBarData] = useFetch("profile");
  const [dropoutList , setDropoutList] = useFetch("profile");
  const [headerData , setHeaderData] = useFetch("profile/aamilsaheb/details");
  const [userFullName , setUserFullName] = useFetch("profile/ ");
  const [EduStatus , setEduStatus] = useState("Araz done");
  const [downloadRecord , setDownloadRecord] = useState(null);


  const handleRequest = (verb , lable , downlaod) => {
    setDropoutList(`profile/aamilsaheb/${verb}`);
    setEduStatus(lable);
    setDownloadRecord(downlaod);
  }


  useEffect(() => {
    if(headerData && headerData[0].jamaat_id){
      setSideBarData(`profile/aamilsaheb/filters/${headerData && headerData[0].jamaat_id}`);
      setDropoutList(`profile/aamilsaheb/razaUserList/${headerData && headerData[0].jamaat_id}/Araz%20done`)
    }

  },[headerData])


  const getCookie =  (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  const setToken = () => {
    if( getCookie("user_its") === null){
     // this URL is for bchet.talabulilm
     window.location.replace('https://www.its52.com/Login.aspx?OneLogin=MHB&r=aHR0cHM6Ly9hYW1pbHNhaGViLnRhbGFidWxpbG0uY29tLw==')
         return
       }

    var username = getCookie("user_its")
    var password = getCookie("ver")

    localStorage.setItem("username", username);

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );
    localStorage.setItem("profile-token", token);
    return token;
 }
  setToken()


  console.log(dropoutList);

  return (
    <>
     <BrowserRouter>
     <MainNavbar headerData={headerData}  userFullName={userFullName}/>
        <Routes>
             <Route path="/mauze-profile-entry" element={<MuzeProfileForm/>} />
            <Route path="/" element={<LandingPage sidebarData={sidebarData} dropoutList={dropoutList} EduStatus={EduStatus} downloadRecord={downloadRecord} handleRequest={handleRequest} />} />
        </Routes>
     </BrowserRouter>
     <ToastContainer />
    </>
  )
}
