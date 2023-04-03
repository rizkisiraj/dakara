import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import LoadingPage from './Pages/LoadingPage'
import Intro from './Pages/Intro'
import Home from './Pages/Home'
import Merch from './Pages/Merch';
import Talent from './Pages/Talent';
import About from './Pages/About';
import FullTalent from './Pages/FullTalent';
import Navbar1 from './Components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Navbar1 />}>
          <Route path='/home' element={<Home />} />
          <Route path='/merch' element={<Merch />} />
          <Route path='/about' element={<About />} />
          <Route path='/talent' element={<Talent />} />
          <Route path='/talent/:id' element={<FullTalent />} />
        </Route>
        <Route path='/' element={<Intro/>} />
      </Routes>
    </Router>
  );
}

export default App;
