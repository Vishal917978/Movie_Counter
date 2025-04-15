import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import TvShows from "../pages/TvShows";

// function AppRoute(props) {
//     return (
//       <Router {...props}>
//         <Routes>
//           <Route  path="/" element={<Home/>} />
//           <Route  path="tv" element={<TvShows/>} />
         
          
//         </Routes>
//       </Router>
//     );
//   }
  function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route  path="/" element={<Home/>} />
          
            <Route path="tv" element={<TvShows/>} />
          
        </Routes>
      </Router>
    );
  }

  export default AppRoute;