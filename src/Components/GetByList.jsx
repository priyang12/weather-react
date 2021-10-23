import { Suspense, useState, lazy } from 'react';
const SelectOptions = lazy(() => import('./SelectOptions'));

const GetByList = ({ setUrl }) => {
  const [WeatherPlace, setWeathePlace] = useState({
    Country: '',
    State: '',
    City: '',
  });
  const { Country, State, City } = WeatherPlace;

  const onChange = (e) => {
    const { name, value } = e.target;
    setWeathePlace({ ...WeatherPlace, [name]: value });
  };

  const WeatherBylist = (e) => {
    e.preventDefault();
    if (Country !== '' || State !== '' || City !== '') {
      //Set URL
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.REACT_APP_weatherkey}`
      );
      console.log(WeatherPlace);
    } else console.log('Please Select');
  };
  return (
    <form id='searchWeather' data-testid='GetBylists' onSubmit={WeatherBylist}>
      <Suspense fallback={<div>Loading...</div>}>
        <SelectOptions
          name='Country'
          url='https://api.countrystatecity.in/v1/countries'
          setValue={onChange}
        />

        <div className='stick'></div>
        <SelectOptions
          name='State'
          url={`https://api.countrystatecity.in/v1/countries/${Country}/states`}
          setValue={onChange}
        />
        <div className='stick'></div>
        <SelectOptions
          name='City'
          url={`https://api.countrystatecity.in/v1/countries/${Country}/states/${State}/cities`}
          setValue={onChange}
        />
      </Suspense>
      <input
        type='submit'
        id='getWeather'
        className='btn btn-dark'
        value='Get Weather'
      />
    </form>
  );
};

export default GetByList;
