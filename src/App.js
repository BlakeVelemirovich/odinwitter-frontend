import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className='app'>
        <SideBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='home' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
