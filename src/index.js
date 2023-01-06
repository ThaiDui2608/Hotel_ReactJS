import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About';
import Accomodation from './components/Accomodation/Accomodation';
import Menu from './components/Menu/Menu';
import News from './components/News/News';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routers = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about-us',
        element: <About/>
      },
      {
        path: '/accomodation',
        element: <Accomodation/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/news',
        element: <News/>
      },
      {
        path: '/gallery',
        element: <Gallery/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  },

])
root.render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
