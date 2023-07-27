import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Profile from './components/Profile';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  }, [])

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <div className='app'>
        {isLoggedIn && <SideBar onLogout={handleLogout} />}
        
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path='/' element={<Login />} />
              <Route path='signup' element={<Signup />} />
            </>
          )}
        
          {isLoggedIn && (
            <>
              <Route path='/' element={<Main />} />
              <Route path='/home' element={<Main />} />
              <Route path='/profile' element={<Profile />} />
            </>
          )}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
