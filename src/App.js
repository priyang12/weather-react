import { Fragment } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './App.css';
import cloud from './image/cloud-min.png';
function App() {
  const img = { src: cloud, alt: 'Loading' };

  return (
    <Fragment>
      <Header logo='Weather' image={img} />
      <Main />
      <div className='footer'>Footer</div>
    </Fragment>
  );
}

export default App;
