import React from 'react';
import Home from './components/home'
import './App.css';
import WeatherState from './context/weatherState';

function App() {
  return (
    <WeatherState>
     <Home />
     </WeatherState>
  
  );
}

export default App;
