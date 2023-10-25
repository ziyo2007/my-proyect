import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Callme from './components/Callme/Callme';
import Contact from './components/Contact/Contact';
import { useContext } from 'react';
import { Context } from './Context/Context';


function App() {
  const {svet, setSvet} = useContext(Context)

  return (
    <div className={svet == true?'App light': 'dark App'}>
      <Header/>
      <About/>
      <Callme/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;