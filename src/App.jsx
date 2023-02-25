import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
