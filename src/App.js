import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// components & pages
import CurrentDay from "./pages/CurrentDay/CurrentDay.js";
import FutureThreeDays from "./pages/FutureThreeDays/FutureThreeDays.js";

import Search from "./components/Search.js";


function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");

  function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
  }

  const isEmpty = isEmptyObject(weather);



  return (
    
    <div className="app">
      
      <Search
        setWeather={setWeather}
        location={location}
        setLocation={setLocation}
      />

      <BrowserRouter>

        <nav className="nav">
          
            <Link to="/"><p>Current Day</p></Link>        
            <Link to="/futurethreedays"><p>Future Three Days</p></Link>
          
        </nav>
      

      {!isEmpty && (
        <Routes>         
          <Route
            path="/"
            element={<CurrentDay weather={weather.currentDay} />}
          />
          <Route 
            path="/futurethreedays" 
            element={<FutureThreeDays data={weather.futureSevenDays} />} />
        </Routes>
      )}

      </BrowserRouter>
    </div>
  );
}

export default App;
