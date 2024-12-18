import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './Game.css';
import Home from './Home';
import Rules from './Rules';
import Leaderboard from './Leaderboard';
import Game from './Game';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/game/:level', element: <Game /> },
  { path: '/Leaderboard/:level', element: <Leaderboard /> },
  { path: '/Rules', element: <Rules /> }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
