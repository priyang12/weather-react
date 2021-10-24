import styles from '../styles/Components_Modules/Display.module.scss';

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
            NO DATA AVAILABLE
          </h1>
        </div>
      </section>
    );
  }
  return (
    <section id={styles.main}>
      <div className={styles.container} data-testid='displayWeather'>
        <h1 className={styles.title} id='Weather_status'>
          {name} {weather[0].main || 'Not Available'}
        </h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <h2 id='description'>
              Description : {weather[0].description || 'Not Available'}
            </h2>
            <ul className={styles.list} id='details'>
              <li>Temperature : {main.temp || 'Not Available'}</li>
              <li>Pressure : {main.pressure || 'Not Available'}</li>
              <li>Humidity : {main.humidity || 'Not Available'}</li>
              <li>Sea Level : {main.Sea_level || 'Not Available'}</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h2 id='visibility'>
              visibility : {visibility || 'Not Available'}
            </h2>
            <ul className={styles.list} id='wind'>
              <li>Speed : {wind?.speed || 'Not Available'}</li>
              <li>Wind : {wind?.deg || 'Not Available'}</li>
              <li>Gust : {wind?.gust || 'Not Available'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
