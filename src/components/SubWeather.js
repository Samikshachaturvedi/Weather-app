import React from 'react'
import "../css/SubWeather.css"
// import { BiWind } from "react-icons/bi";
// import { CiTempHigh } from "react-icons/ci";
const SubWeather = ({cityWeatherDetails}) => {
   
    const forecast = cityWeatherDetails?.forecast?.forecastday[0].hour
    console.log(forecast)
  return (
    <>
    <div class="flex flex-col w-2/4 my-2 font-bold">
        <div class="grid h-10 card bg-base-300 rounded-box place-items-center">
            Hourly Forecast
        </div>
    </div>
    <div className='grid grid-cols-4 gap-4 '>
    {/* <div class="flex flex-row justify-center item-center w-full"> */}
                   {forecast?.map((ele, i) =>(
                 <div class= "basis-1/4 box w-44 h-40 mx-2 py-2 px-4">
                    <p className='text-center'>{"Time"+ele.time}</p>
                 <p className='text-center my-2'>{"Temp" + ele.temp_c + "C"}</p>
                 <p className='text-center'>{"Wind"+ele.wind_kph}</p></div>
                //  <BiWind/> <CiTempHigh/>
               
            ))}
        </div>
       
      
    </>
  );
};

export default SubWeather;
