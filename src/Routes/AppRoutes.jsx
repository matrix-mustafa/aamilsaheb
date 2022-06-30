import {  BrowserRouter ,  Routes, Route } from "react-router-dom";
import React , {useContext} from 'react';
import LandingPage from '../components/LangingPage';
import { UserProvider } from "../Context";

export default function AppRoutes() {
  const getContext = useContext(UserProvider);

  console.log(getContext)

  return (
    <>
     <BrowserRouter>
        <Routes>
            {/* <Route path="/its-login" component={ItsLoginUser} />
             */}
            <Route path="/" element={<LandingPage/>} /> 
        </Routes>
     </BrowserRouter>
    </>
  )
}
