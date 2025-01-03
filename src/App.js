import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordSearch from './pages/ResetPasswordSearch';
import ConfirmEmail from './pages/ConfirmEmail';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="/password-reset" Component={ResetPasswordSearch}/>
            <Route path="/new-password" Component={ResetPassword}/>
            <Route path="/user/:id" Component={UserProfile} />
            <Route path='/confirm-email' Component={ConfirmEmail}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
