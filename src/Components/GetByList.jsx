import { Suspense, useState, lazy } from "react";
import styles from "../styles/Components_Modules/Form.module.scss";
import WeatherStyles from "../styles/Components_Modules/SearchWeather.module.scss";

const SelectOptions = lazy(() => import("./SelectOptions"));

const GetByList = ({ setUrl }) => {
  const [WeatherPlace, setWeathePlace] = useState({
    Country: "",
    State: "",
    City: "",
  });
  const { Country, State, City } = WeatherPlace;

  const onChange = (e) => {
    const { name, value } = e.target;
    setWeathePlace({ ...WeatherPlace, [name]: value });
  };

  const WeatherBylist = (e) => {
    e.preventDefault();
    if (Country !== "" || State !== "" || City !== "") {
      //Set URL
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.REACT_APP_weatherkey}`
      );
    }
  };
  return (
    <form
      className={styles.form}
      data-testid="GetBylists"
      onSubmit={WeatherBylist}
    >
      <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
        <SelectOptions
          name="Country"
          url="https://api.countrystatecity.in/v1/countries"
          setValue={onChange}
        />

        <div className={styles.stick}></div>
        <SelectOptions
          name="State"
          url={`https://api.countrystatecity.in/v1/countries/${Country}/states`}
          setValue={onChange}
        />
        <div className={styles.stick}></div>
        <SelectOptions
          name="City"
          url={`https://api.countrystatecity.in/v1/countries/${Country}/states/${State}/cities`}
          setValue={onChange}
        />
      </Suspense>
      <input
        type="submit"
        className={`btn btn-dark ${WeatherStyles.getWeatherBtn}`}
        value="Get Weather"
      />
    </form>
  );
};

export default GetByList;
