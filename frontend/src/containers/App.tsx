import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import Restaurant from "../pages/Restaurant/Restaurant.tsx";
import WriteReview from "../pages/WriteReview/WriteReview.tsx";
import React from "react";

const App : React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/writereview" element={<WriteReview/>}/>
      </Routes>
    </Router>
  )
    
}

export default App;
