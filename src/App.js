import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className='flex justify-center w-3/4 mx-auto'>
      <Router>
        <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/about'  element={<About />} />
            <Route path='*'  element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
