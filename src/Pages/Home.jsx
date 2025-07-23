import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from './Contact'
import { Link, Outlet } from 'react-router-dom'
import WeatherApp from '../Components/WeatherApp'
import Portfolio4 from '@/Components/Hero'
import TypingTest from '@/Components/TypingTest'

const Home = () => {
  return (
    <div>
     <Portfolio4/>
      
    <Link to = "/users" className = "text-blue-600 underline">
    View Users
    </Link>
    <WeatherApp/>
     <TypingTest/>
    <Outlet/>

    </div>
  )
}

export default Home