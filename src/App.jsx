import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Footer/>
      <Portfolio/>
    </div>
  );
}

export default App;