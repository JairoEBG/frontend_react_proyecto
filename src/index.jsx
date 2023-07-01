import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './routes/Login';
import Orders from './routes/Orders';
import { NotFound } from './routes/NotFound';
import { MainPage } from './routes/MainPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<App/>}>
          <Route path = '/main' element={<MainPage/>} />         
          <Route path = '/login' element={<Login/>} />
          <Route path = '/orders' element={<Orders/>} />
          <Route path = '*' element={<NotFound/>} />
        </Route>        
      </Routes>        
    </BrowserRouter>
  </React.StrictMode>
);
//linea 15 no se ha hecho la pagina de inicio <Route index element={<Inicio/>}/>