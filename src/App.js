import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Space } from "antd";
import "./App.css";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Home from "./Components/Home";


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        
          <Route path="/Home/*" element={<Home />} />




        </Routes>
      </BrowserRouter>

      {/* <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter /> */}
    </div>
  );
}
export default App;
