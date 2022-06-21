import './App.css';
import Intro from './components/Intro';
import Productlist from './components/Productlist';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     <Intro/>
     <Productlist/>
     <Contact/>
    </div>
  );
}

export default App;
