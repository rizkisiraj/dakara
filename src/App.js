import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import LoadingPage from './Pages/LoadingPage'
import Intro from './Pages/Intro'
import Home from './Pages/Home'
import Merch from './Pages/Merch';
<<<<<<< HEAD
import About from './Pages/About';
=======
import Talent from './Pages/Talent';
>>>>>>> f26b086af856f3e9c001ca81d5a2f3606ee2dace

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
<<<<<<< HEAD
        <Route path='/about' element={<About />} />
=======
        <Route path='/talent' element={<Talent />} />
>>>>>>> f26b086af856f3e9c001ca81d5a2f3606ee2dace
      </Routes>
    </Router>
  );
}

export default App;
