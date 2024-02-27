import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { Index, Login, Register, NotFound } from './pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Index/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
