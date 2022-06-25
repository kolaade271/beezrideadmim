import './css/main.css';
import Leftnav from './components/lefnav';
import TopNav from './components/topnav';
// import Head from './component/head';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mainpage from './page/mainPage';
import Manangement from './page/management';
import UserAccount from './page/account';
import Report from './page/report';
function App() {
  return (
    <div className="App">
       <TopNav/>
      <div className="container-fluid">
      
      <Leftnav/>

      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/> } />
      <Route path="/management" element={<Manangement/> } />
      <Route path="/account" element={<UserAccount/> } />
      <Route path="/reports" element={<Report/> } />
    </Routes>
    </BrowserRouter>
      </div>
      

      </div>
    
    
    
  );
}
export default App
