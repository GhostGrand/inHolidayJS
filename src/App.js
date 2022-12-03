import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/AuthorisationRegistration/Forms/Form";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";
import Help from "./Components/Help";
import AboutUs from "./Components/AboutUs/AboutUs";
import TemplateOrderForm from "./Components/TemplateOrderForm/TemplateOrderForm";


function App() {
  return (
    <div className="App">
      {/* <AboutUs></AboutUs> */}
      {/* <Header></Header> */}
      {/* <Registation></Registation> */}
      {/* <Authorisation></Authorisation> */}
      <TemplateOrderForm></TemplateOrderForm>
    </div>
  );
}

export default App;
