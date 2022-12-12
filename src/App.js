import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import TemplateOrderForm from "./Components/TemplateOrderForm/TemplateOrderForm";
import InfoOrder from "./Components/InfoOrder/InfoOrder";
import Main from "./Components/Main/Main";
import PersonalAccount from "./Components/PersonalAccount/PersonalAccount";
import Templates from "./Components/Templates/Templates";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
                
          <Route path="/" element={<Main/>}/>
          <Route path="/account" element={<PersonalAccount/>}/>
          <Route path="/templates" element={<Templates/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/auth" element={<Authorisation/>}/>
          <Route path="/reg" element={<Registation/>}/>
        </Routes>
        {/* <Registation></Registation>
        <Authorisation></Authorisation> */}
        {/* <AboutUs></AboutUs> */}
        {/* <TemplateOrderForm></TemplateOrderForm> */}
        {/* <PersonalAccount></PersonalAccount> */}
        {/*<InfoOrder></InfoOrder>*/}
        <Footer></Footer>
      </div>
    </Router>
=======
    <div className="App">
      <Header></Header>
      {/* <Registation></Registation>
      <Authorisation></Authorisation> */}
      {/* <AboutUs></AboutUs> */}
      {/* <TemplateOrderForm></TemplateOrderForm> */}
      {/* <PersonalAccount></PersonalAccount> */}
      {/* <InfoOrder></InfoOrder> */}
      <Footer></Footer>
    </div>
>>>>>>> 23751624891f979cfcef8e1f0787b2c0530525de
  );
}

export default App;
