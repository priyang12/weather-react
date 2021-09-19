import React, { Fragment, useState } from 'react';
import { useFetch } from '../Utilis/useFetch';
import useToogle from '../Utilis/useToogle';
import GetbyCityname from './GetbyCityname';
import GetBylist from './GetBylist';
import Spinner from '../Utilis/Spinner';
import Display from '../Components/Display';

const Main = () => {
  const [Url, setUrl] = useState('');
  const { loading, error, data } = useFetch(Url);
  const [toggleScreen, settoggleScreen] = useToogle(true);
  const ChangeScreen = () => {
    settoggleScreen();
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div id='alert'>
          <p id='alertmsg'> UNFORTUNATELY 😕NO WEATHER DATA FOUND</p>
        </div>
      ) : (
        <Display weatherDetails={data} />
      )}
      <section id='search' data-testid='InputCity'>
        <div id='ToogleScreen'>
          <h1>{toggleScreen ? 'By City Name' : 'By List'}</h1>
          <div onClick={ChangeScreen}>
            <i className='fa fa-refresh' aria-hidden='true'></i>
          </div>
        </div>
        <div className='wetherinput' id='CitySearch'>
          {toggleScreen ? (
            <GetbyCityname setUrl={setUrl} />
          ) : (
            <GetBylist setUrl={setUrl} />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
