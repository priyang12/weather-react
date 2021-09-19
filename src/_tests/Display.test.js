import Display from '../Components/Display';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';

// Dummy weather data
const weatherInfo = {
  coord: {
    lon: 72.8333,
    lat: 21.1667,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10n',
    },
  ],
  base: 'stations',
  main: {
    temp: 301.14,
    feels_like: 305.69,
    temp_min: 301.14,
    temp_max: 301.14,
    pressure: 1004,
    humidity: 83,
  },
  visibility: 6000,
  wind: {
    speed: 2.06,
    deg: 210,
  },
  rain: {
    '1h': 2.1,
  },
  clouds: {
    all: 40,
  },
  dt: 1630855914,
  sys: {
    type: 1,
    id: 9071,
    country: 'IN',
    sunrise: 1630803205,
    sunset: 1630848109,
  },
  timezone: 19800,
  id: 1255364,
  name: 'Surat',
  cod: 200,
};

describe('weather display property', () => {
  let weatherDisplay;
  beforeEach(() => {
    render(<Display weatherDetails={weatherInfo} />);
    weatherDisplay = screen.getByTestId('displayWeather');
  });
  it('weather value check', () => {
    //Status
    const weatherStatus = weatherDisplay.querySelector('#Weather_status');
    expect(weatherStatus.textContent).toBe(
      `${weatherInfo.name} | ${weatherInfo.weather[0].main}`
    );
    //Desc
    const description = weatherDisplay.querySelector('#description');
    expect(description.textContent).toBe(
      `Description : ${weatherInfo.weather[0].description}`
    );

    //Details Temp,  pressure, humidity
    const details = weatherDisplay.querySelector('#details');
    expect(details.childNodes[0].textContent).toBe(
      `Temprature : ${weatherInfo.main.temp}`
    );
    expect(details.childNodes[1].textContent).toBe(
      `Pressure : ${weatherInfo.main.pressure}`
    );
    expect(details.childNodes[2].textContent).toBe(
      `Humidity : ${weatherInfo.main.humidity}`
    );
  });
  it('Check it for Not Avaliable Fallback', () => {
    const details = weatherDisplay.querySelector('#details');
    expect(details.childNodes[3].textContent).toBe(`Sea Level : Not Avaliable`);
  });
});

describe('check for Fail Values', () => {
  it('check for null values fallback', () => {
    const newInfo = delete weatherInfo['weather'];
    render(<Display weatherDetails={newInfo} />);
    const weatherDisplay = screen.getByTestId('displayWeather');
    const status = weatherDisplay.querySelector('#Weather_status');
    expect(status.textContent).toMatch(/NO DATA/);
  });
});
