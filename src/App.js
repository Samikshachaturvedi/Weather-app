import "./App.css";
import SearchCIty from "./components/SearchCIty";
import WeatherDeails from "./components/WeatherDeails";
import { useState } from "react";
import WeatherDetails from "./components/WeatherDetails";
import AsycnSearch from "./components/AsycnSearch";
function App() {
  const [cityDetails, setCityDetails] = useState({
    country: "",
    label: "",
    lat: "",
    long: "",
    region: "",
    value: "",
  });

  return (
    <div className="app">
      <div className="flex justify-end items-center flex-col">
        <h1 className="text-7xl font-bold text-center text-color: #62626">Weather </h1>

        <AsycnSearch setCityDetails={setCityDetails} />
       
        {cityDetails.value && <WeatherDetails cityDetails={cityDetails} />}
      </div>
    </div>
  );
}

export default App;
