import './index.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import appwriteService from './appwrite/config';
import {allPosts} from './store/postSlice';
import { useSelector } from 'react-redux';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.status);

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
      .then(() => {
        appwriteService.getPosts()
          .then((posts) => {
            if (posts) {
              dispatch(allPosts(posts.documents));
            }
            else {
              dispatch(allPosts([]));
            }
          });
      })
      .finally(() => setLoading(false));
  }, [isLoggedIn]);
  
  return loading ?
    (
      <h1>Loading...</h1>
    ) :
    (
      <div className="">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
}

export default App