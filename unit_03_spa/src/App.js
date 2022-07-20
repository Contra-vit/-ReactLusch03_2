import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Catalogy from './Catalogy';


function App() {
  return (
    <div >
      <div>Hi


      </div>
      <Router>
                <Header/>

        <Routes>
          <Route exact path = '/' element ={<Home/>} />
          <Route  path = '/about' element ={<About/>} />
          <Route  path = '/cat' element ={<Catalogy/>} />


        </Routes>
      </Router>

    
    </div>
  );
}

export default App;
