import { Fragment } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import cloud from './image/cloud-min.png';
import Footer from './Components/Footer';
import './App.css';
function App() {
  const img = { src: cloud, alt: 'Loading' };

  return (
    <Fragment>
      <Header logo='Weather' image={img} />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
