import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/home" element={<Home/>} />

      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
