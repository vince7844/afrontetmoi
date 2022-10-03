import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, Profile, Candidates, Tests, Projects } from './pages'

function App() {
  return (
    <div className='flex'>
      <div className='flex-2'>
        <Navbar />
      </div>
      <div className='flex-1'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
