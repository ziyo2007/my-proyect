import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Callme from './components/Callme/Callme';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Callme/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;