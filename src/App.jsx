import { Fragment, useState } from 'react';
import { useFetch, useToggle } from './Utils/CustomHook';
//Components
import Header from './Components/Header';
import cloud from './image/cloud-min.png';
import Footer from './Components/Footer';
import GetByCityName from './Components/GetByCityName';
import GetByList from './Components/GetByList';
import Spinner from './Utils/Spinner';
import Display from './Components/Display';
import Alert from './Components/Alert';
import ToggleScreen from './Components/ToggleScreen';
//Style
import './App.css';

function App() {
  const img = { src: cloud, alt: 'Loading' };

  const [Url, setUrl] = useState('');
  const { Loading, Error, Data } = useFetch(Url);

  const { Toggle, ToggleState } = useToggle(true);

  const ChangeScreen = () => {
    ToggleState();
  };

  return (
    <Fragment>
      <Header logo='Weather' image={img} />
      {Loading ? (
        <Spinner />
      ) : Error ? (
        <Alert massage='UNFORTUNATELY 😕NO WEATHER DATA FOUND' />
      ) : (
        <Display weatherDetails={Data} />
      )}
      <section id='search' data-testid='InputCity'>
        <ToggleScreen Toggle={Toggle} OnClick={ChangeScreen} />
        <div className='wetherinput' id='CitySearch'>
          {Toggle ? (
            <GetByCityName setUrl={setUrl} />
          ) : (
            <GetByList setUrl={setUrl} />
          )}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
