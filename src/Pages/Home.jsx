import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from './Contact'
import { Link, Outlet } from 'react-router-dom'
import WeatherApp from '../Components/WeatherApp'

const Home = () => {
  return (
    <div>
    
      
    <Link to = "/users" className = "text-blue-600 underline">
    View Users
    </Link>
    <WeatherApp/>
  
    <Outlet/>

    </div>
  )
}

export default Home