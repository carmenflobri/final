import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import New from './New';
import Myprofile from './Myprofile';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/myprofile' element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
