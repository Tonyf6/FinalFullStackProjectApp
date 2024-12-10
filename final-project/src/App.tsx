
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import BarberSelection from './components/barberselection';
import BarberServices from './components/barberservices';
import Throwaway from './components/Throwaway';
import { Navbar } from 'flowbite-react';
import './App.css';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ChooseServicePage from './components/ChooseTimePage';
import ChooseTimePage from './components/ChooseTimePage';


const App = () => {
  return (

    <>
       {/* <LandingPage/>  */}
       <ChooseTimePage/>
       {/* <Throwaway/> */}
       {/* <ChooseServicePage/> */}
       {/* <NavBar/> */}
       {/* <AboutUs/> */}
       {/* <BarberSelection/> */}
       {/* <BarberServices/> */}

      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/barberselection" element={<BarberSelection />} />
        <Route path="/barberservices" element={< BarberServices/>} />

      </Routes>
    </Router>
    </>
  )
};

    


export default App;
