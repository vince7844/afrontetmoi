import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, Profile, Candidates, TestingSessions, Projects } from './pages'
import { createContext, useState } from 'react';
import memberPicture from './assets/pictures/members/philipp.jpg'

export const AppContext = createContext(null)

function App() {
  const [userProfile, setUserProfile] = useState({ 
    userPicture: memberPicture, 
    userFirstname: 'Gérémie', 
    userLastname: 'Ziong', 
    userEmail: 'gziong@afrontetmoi.fr', 
    userPosition: 'Responsable RH' 
  })

  return (
    <AppContext.Provider value={{ userProfile, setUserProfile }}>
      <div className='flex'>
        <Navbar />
        <div className='flex-1 px-12'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/testing-sessions" element={<TestingSessions />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
