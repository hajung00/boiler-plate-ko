import './App.css';


import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandigPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';


function App() {

  return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }


export default App;
