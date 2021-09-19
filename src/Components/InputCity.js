import PropTypes from 'prop-types';
import ToogleHook from '../Utilis/ToogleHook';
import FormHook from '../Utilis/FormHook';
import GetbyCityname from './GetbyCityname';

import { Profiler } from 'react';
import GetBylist from './GetBylist';

// import GetBylist from './GetBylist';
function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  // console.log(phase);
  // console.log(actualDuration);
}
const InputCity = ({ setUrl }) => {
  const [SeachByCityName, setSeachByCityName] = FormHook({ cityName: '' });
  const [DisbleSerBtn, setDisbleSerachBtn] = ToogleHook(false);

  const [toggleScreen, settoggleScreen] = ToogleHook(false);

  const ChangeScreen = () => {
    settoggleScreen();
  };

  const SeachbyCity = (e) => {
    e.preventDefault();
    if (SeachByCityName.cityName !== '') {
      setDisbleSerachBtn();
      setUrl(
        `https://api.openweathermap.org/data/2.5/weather?q=${SeachByCityName.cityName}&appid=${process.env.REACT_APP_weatherkey}`
      );

      setTimeout(() => {
        setDisbleSerachBtn();
      }, 3000);
    }
  };
  return (
    <section id='search' data-testid='InputCity'>
      <div id='ToogleScreen'>
        <h1>{toggleScreen ? 'By List' : ' By City Name'}</h1>
        <div onClick={ChangeScreen}>
          <i className='fa fa-refresh' aria-hidden='true'></i>
        </div>
      </div>
      <Profiler id='GetByCityName' onRender={onRenderCallback}>
        <div className='wetherinput' id='CitySearch'>
          {toggleScreen ? (
            <GetBylist />
          ) : (
            <GetbyCityname
              SeachbyCity={SeachbyCity}
              setSeachByCityName={setSeachByCityName}
              DisbleSerachBtn={DisbleSerBtn}
            />
          )}
        </div>
      </Profiler>
    </section>
  );
};

InputCity.propTypes = {
  setUrl: PropTypes.func.isRequired,
};
export default InputCity;
