import React from 'react';

const Display = ({ weatherDetails }) => {
  if (!weatherDetails) {
    return null;
  }
  const { weather, main, visibility, wind, name } = weatherDetails;
  if (!weather) {
    return (
      <section id='main'>
        <div className='container' data-testid='displayWeather'>
          <h1 className='display' id='Weather_status'>
            NO DATA AVALIABLE
          </h1>
        </div>
      </section>
    );
  }
  return (
    <section id='main'>
      <div className='container' data-testid='displayWeather'>
        <h1 className='title' id='Weather_status'>
          {name} {weather[0].main || 'Not Available'}
        </h1>
        <div className='row'>
          <div className='col'>
            <h2 id='description'>
              Description : {weather[0].description || 'Not Avaliable'}
            </h2>
            <ul className='list' id='details'>
              <li>Temperature : {main.temp || 'Not Avaliable'}</li>
              <li>Pressure : {main.pressure || 'Not Avaliable'}</li>
              <li>Humidity : {main.humidity || 'Not Avaliable'}</li>
              <li>Sea Level : {main.Sea_level || 'Not Avaliable'}</li>
            </ul>
          </div>
          <div className='col'>
            <h2 id='visibility'>
              visibility : {visibility || 'Not Avaliable'}
            </h2>
            <ul className='list' id='wind'>
              <li>Speed : {wind?.speed || 'Not Avaliable'}</li>
              <li>Wind : {wind?.deg || 'Not Avaliable'}</li>
              <li>Gust : {wind?.gust || 'Not Avaliable'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
