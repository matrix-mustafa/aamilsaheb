import {  BrowserRouter ,  Routes, Route } from "react-router-dom";
import React , {useContext} from 'react';
import LandingPage from '../components/LangingPage';
import UserContext from '../Context';
import { UserProvider } from "../Context";
import { Buffer } from "buffer";

export default function AppRoutes() {
  // const user = useContext(UserContext);

  const getCookie =  (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    console.log(ca)
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


         const token = Buffer.from(`${username}:${password}`, "utf8").toString(
           "base64"
         );
         console.log(token)
         localStorage.setItem("profile-token", token);
         return token;
 }

  console.log(setToken())

  return (
    <>
      {/* <UserProvider value={user}> */}
     <BrowserRouter>
        <Routes>
            {/* <Route path="/its-login" component={ItsLoginUser} />
             */}
            <Route path="/" element={<LandingPage/>} /> 
        </Routes>
     </BrowserRouter>
       {/* </UserProvider> */}
    </>
  )
}
