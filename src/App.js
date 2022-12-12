import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";
import Help from "./Components/Help/Help";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import TemplateOrderForm from "./Components/TemplateOrderForm/TemplateOrderForm";
import InfoOrder from "./Components/InfoOrder/InfoOrder";
import PersonalAccount from "./Components/PersonalAccount/PersonalAccount"

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Registation></Registation>
      <Authorisation></Authorisation> */}
      {/* <AboutUs></AboutUs> */}
      {/* <TemplateOrderForm></TemplateOrderForm> */}
      <PersonalAccount></PersonalAccount>
      {/* <InfoOrder></InfoOrder> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
