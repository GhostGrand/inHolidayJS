import logo from "./logo.svg";
import "./App.css";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";
import Help from "./Components/Help";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <AboutUs></AboutUs> */}
      <Header></Header>
      <Registation></Registation>
      <Authorisation></Authorisation>
      <Footer></Footer>
    </div>
  );
}

export default App;
