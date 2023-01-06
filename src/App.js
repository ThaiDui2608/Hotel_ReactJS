import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <div className='header'>
        <Header/>
      </div>

      <div className='body'>
        <Outlet/>
      </div>

      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
