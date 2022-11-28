import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/AuthorisationRegistration/Forms/Form";
import Registation from "./Components/AuthorisationRegistration/Registation";
import Authorisation from "./Components/AuthorisationRegistration/Authorisation";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Registation></Registation>
      {/* <Authorisation></Authorisation> */}
    </div>
  );
}

export default App;
