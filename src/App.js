import './App.css';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./Routes/AppRoutes";
import UserContext from './Context';
import { UserProvider } from './Context';


export default function App() {
  // const user = useContext(UserContext);

  // console.log(user)

  return (
    <>
    {/* <UserProvider value={user}> */}
    <Routes/>
    {/* </UserProvider> */}
    </>
  );
}
