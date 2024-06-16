// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import VehicleEntryExit from './components/VehicleEntryExit';
import SearchByVehicleId from './components/SearchByVehicleId';
import SearchByDatetimeRange from './components/SearchByDatetimeRange';
import Defaulters from './components/Defaulters';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicle_entry_exit" element={<VehicleEntryExit />} />
          <Route path="/search_by_vehicle_id" element={<SearchByVehicleId />} />
          <Route path="/search_by_datetime_range" element={<SearchByDatetimeRange />} />
          <Route path="/defaulters" element={<Defaulters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
