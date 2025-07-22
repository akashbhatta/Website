import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Project from '../Pages/Project'
import Home from '../Pages/Home'
import User from '../Pages/UserDetail'
import Users from '../Pages/Users'
import UserList from '../Pages/UserList'
import UserDetail from '../Pages/UserDetail'
import WeatherApp from '../Components/WeatherApp'

const AppRouter = () => {
  return (
<Routes>
    <Route path='/' element={<Home/>} />
 

    <Route path = "/aboutMe" element = {<About/>}/>
     <Route path = "/contact" element = {<Contact/>}/>
       <Route path = "/projects" element = {<Project/>}/>
      

       <Route path ="/users" element={<Users/>}>
          <Route index element = {<UserList/>}/>
            <Route index element = {<WeatherApp/>}/>
          <Route path = ":id" element = {<UserDetail/>}/>
         
         </Route>
         
</Routes>
  )
}

export default AppRouter