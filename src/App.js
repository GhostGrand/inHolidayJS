import logo from "./logo.svg";
import "./App.css";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";
import Help from "./Components/Help";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import TemplateOrderForm from "./Components/TemplateOrderForm/TemplateOrderForm";
import PersonalAccount from "./Components/PersonalAccount/PersonalAccount";


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Registation></Registation>
      <Authorisation></Authorisation> */}
      {/* <AboutUs></AboutUs> */}
      {/* <TemplateOrderForm></TemplateOrderForm> */}
      <PersonalAccount></PersonalAccount>
      <Footer></Footer>
    </div>
  );
}

export default App;
