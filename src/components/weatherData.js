import React , {useContext, Fragment, useState}from 'react';
import weatherContext from '../context/weatherContext';
import Spinner from './spinner';
import Night from  './night.jpg'

const WeatherData = () => {

    const {data, loading, dataLoaded} = useContext(weatherContext);
   
    const Data =(
        <Fragment>
        {data===null ? <Spinner /> : (
            
        <div className = "container-fluid" >
            
          <p> <h1>{data.location.name}, {data.location.region}, {data.location.country}</h1></p> 
            <img src= {data.current.condition.icon} style={{'float':'right', 'width': '75px'}}  />
        <p style={{'float':'right'}}><strong>Current Condition : {data.current.condition.text} </strong></p>   
        
  <div class="row" style={{'margin': '20px'}}>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Current Tempearture</h5>
        <p class="card-text">{data.current.temp_c} °C</p>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Current Humidity</h5>
        <p class="card-text">{data.current.humidity}</p>
    
      </div>
    </div>
  </div>

  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Max Tempearture</h5>
        <p class="card-text">{data.forecast.forecastday[0].day.maxtemp_c}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Min Tempearture</h5>
        <p class="card-text">{data.forecast.forecastday[0].day.mintemp_c}</p>
    
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sunrise</h5>
        <p class="card-text">{data.forecast.forecastday[0].astro.sunrise}</p>
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sunset</h5>
        <p class="card-text">{data.forecast.forecastday[0].astro.sunset}</p>
      </div>
    </div>
  </div>
</div>

        </div>
        )}
    </Fragment>
    )
    const ShowError =(
        <Fragment>
            <div className="container">
            <h1 style={{'textAlign': 'center'}}>Search for a city/region</h1>
            </div>
        </Fragment>
    )
  
    return (
        <div>
       {dataLoaded ? Data: ShowError}
        </div>
    )
}

export default WeatherData
