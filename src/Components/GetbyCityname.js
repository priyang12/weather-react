import PropTypes from 'prop-types';
import { useState } from 'react';

const GetbyCityname = ({ setUrl }) => {
  const [cityName, setcityName] = useState('');
  const SeachbyCity = (e) => {
    e.preventDefault();
    if (cityName !== '') {
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_weatherkey}`
      );
    }
  };
  return (
    <form id='searchWeather' onSubmit={SeachbyCity} data-testid='getbycity'>
      <div className='form-control'>
        <label htmlFor='City'>Enter City</label>
        <input
          type='text'
          id='searchCity'
          name='cityName'
          onChange={(e) => setcityName(e.target.value)}
        />
      </div>

      <input type='submit' className='btn btn-light' value='Get City Weather' />
    </form>
  );
};
GetbyCityname.propTypes = {
  setUrl: PropTypes.func.isRequired,
};
export default GetbyCityname;