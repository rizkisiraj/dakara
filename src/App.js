import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import LoadingPage from './Pages/LoadingPage'
import Intro from './Pages/Intro'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Intro/>} />
        <Route path='/home' element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
