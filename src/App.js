import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import LoadingPage from './Pages/LoadingPage'
import Intro from './Pages/Intro'
import Home from './Pages/Home'
import Merch from './Pages/Merch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/merch' element={<Merch />} />
      </Routes>
    </Router>
  );
}

export default App;
