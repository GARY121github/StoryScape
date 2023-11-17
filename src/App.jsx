import './index.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return loading ?
    (
      <h1>Loading...</h1>
    ) :
    (
      <div className="">
        <Header />
        <h1 className="text-2xl">Main Page</h1>
        <Outlet />
        <Footer />
      </div>
    )
}

export default App