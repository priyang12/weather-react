import styles from '../styles/Components_Modules/Form.module.scss';
import WeatherStyles from '../styles/Components_Modules/SearchWeather.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const GetByCityName = ({
  setUrl
}: any) => {
  const [cityName, setcityName] = useState('');
  const SeachbyCity = (e: any) => {
    e.preventDefault();
    if (cityName !== '') {
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_weatherkey}`
      );
    }
  };
  return (
    <form
      className={styles.form}
      onSubmit={SeachbyCity}
      data-testid='getbycity'
    >
      <div className={WeatherStyles.CityName}>
        <label htmlFor='City'>Enter City</label>
        <input
          type='text'
          id='searchCity'
          name='cityName'
          aria-label='Cityname'
          onChange={(e) => setcityName(e.target.value)}
        />
      </div>

      <input
        type='submit'
        className={`btn btn-light ${WeatherStyles.getWeatherBtn}`}
        value='Get City Weather'
      />
    </form>
  );
};
GetByCityName.propTypes = {
  setUrl: PropTypes.func.isRequired,
};
export default GetByCityName;
