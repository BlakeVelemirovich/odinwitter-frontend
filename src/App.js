import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Profile from './components/Profile';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Signup from './components/Signup';

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <div className='app'>
        {isLoggedIn && <SideBar />}
        
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
