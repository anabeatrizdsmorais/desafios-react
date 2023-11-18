import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1- Roteamento básico
import Home from './components/Home.jsx';
import Contato from './components/Contato.jsx';
import Sobre from './components/Sobre.jsx';

//2- Rota parametrizada
import User from './components/User.jsx';

// 4- Rota de erro 404
import NotFound from './components/NotFound.jsx';

// 5- Rota com query params
import Search from './components/Search.jsx';

// 6- Rota protegida
const isAuth = false;
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contato",
        element: <Contato/>
      },
      {
        path: "/sobre",
        element: isAuth ? <Sobre/> : <Navigate to="/" />
      },
      {
        path: "/usuarios/:userId", 
        element: <User />
      },
      {
        path: "/search", 
        element: <Search />
      },
    ]
  } 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
