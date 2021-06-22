import React, {useEffect, useState} from 'react';
import moment from 'moment'
import './style.css';
import SearchBar from '../../containers/SearchBar';


const date = moment().format("HH:mm:ss");
const Home = ({weather, city, back}) => {
  let icon = "";

  if(weather) {
    if(weather.description.includes('Sunny')) {
      icon = "fa-sun";
    }
    else if(weather.description.includes('Cloudy')) {
      icon = "fa-cloud";
    }else if(weather.description.includes('cloudy')) {
      icon = "fa-cloud";
    }
    else if(weather.description.includes('Rain')){
      icon = "fa-cloud-rain";
    }
    else if(weather.description.includes('rain')){
      icon = "fa-cloud-rain";
    }
    else if(weather.description.includes('Thunderstorm')) {
      icon = "fa-bolt";
    }
    else if(weather.description.includes('Snow')) {
      icon = "fa-snowflake";
    }
  }


const [dateTime, setDateTime] = useState({
  date: date
});
useEffect(() => {
  const timer = setInterval(() => {
   const date = moment().format("HH:mm:ss");
   setDateTime({
     date: date
   });
  }, 1000);
  return () => clearInterval(timer);
}, [])


  return (
    <div className="container">

      {weather ?        
        <section>
        <div className="row">     
            <h1 onClick={() => {back()}} className="display-1 mt-3 text-capitalize back">{city}</h1>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2 className="display-2">{dateTime.date}</h2>
            <p>{moment().format("dddd MMMM DD, YYYY")}</p>
          </div>
          <div className="col-md-6 mt-5 d-flex flex-column align-items-md-end ">
          <i className={["fas display-2 mb-4 "+icon]}></i>
          <p>{weather.description}</p>
          <p className="w-25 d-flex justify-content-between align-items-baseline">
            <i className="fas fa-wind"></i> {weather.wind} 
            <i class="fas fa-thermometer-three-quarters"></i> {weather.temperature}
            </p>
          </div>
        </div>
        </section>
          : <SearchBar/> }


    </div>
  )};

export default Home;
