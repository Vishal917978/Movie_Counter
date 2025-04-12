import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";

function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route  path="/" element={<Home/>} />
          
         
          
        </Routes>
      </Router>
    );
  }
  export default AppRoute;