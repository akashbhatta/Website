
import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import { UseTheme } from './Hooks/UseTheme';
0

import AppRouter from './Routers/AppRouter';

function App() {
 
  const {theme, toggleTheme} = UseTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className='scroll-smooth bg-white dark:bg-black  text-black dark:text-white'>
       <Navbar/>
       
      <AppRouter/>
 
     
    </div>
  )
}

export default App
