import './App.css';
import Landingpage from './Pages/Landingpage';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffAgumentation from './Pages/StaffAgumentation';
import Navbar from './Components/Navbar';
import DirectPlacements from './Pages/DirectPlacements';
import TalentDevelopment from './Pages/TalentDevelopment';

function App() {
  return (
    <div>
      <Router>
   <Navbar/>
      <Routes>
        <Route path="/" element={ <Landingpage/>}/>
          
          <Route path="/staff" element={<StaffAgumentation/>}/>
          <Route path="/direct-hire-placement" element={<DirectPlacements />} />
          <Route path="/talent-development-and-transformation" element={<TalentDevelopment/>} />
        
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
