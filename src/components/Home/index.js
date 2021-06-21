import React from 'react';
import moment from 'moment'
import './style.css';
import SearchBar from '../../containers/SearchBar';



const Home = ({weather, city, back}) => {
  let icon = "";

  if(weather) {
    if(weather.description.includes('Sunny')) {
      icon = "fa-sun";
    }
    else if(weather.description.includes('Cloud')) {
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


  return (
    <div className="container">

      {weather ?        
        <section>
        <div className="row">     
            <h1 onClick={() => {back()}} className="display-1 mt-3 text-capitalize back">{city}</h1>
        </div>
        <div className="row">
          <div className="col-6 mt-5">
            <h2 className="display-2">{moment().format("HH:mm:ss")}</h2>
            <p>{moment().format("dddd MMMM DD, YYYY")}</p>
          </div>
          <div className="col-6 mt-5 d-flex flex-column align-items-end ">
          <i className={["fas display-2 mb-4 "+icon]}></i>
          <p>{weather.description}</p>
          <p><i className="fas fa-wind"></i> {weather.wind} {weather.temperature}</p>
          </div>
        </div>
        </section>
          : <SearchBar/> }


    </div>
  )};

export default Home;
