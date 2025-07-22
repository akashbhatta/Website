import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className='px-6 max-w-xl mx-auto'>
        <h2>Users Section</h2>
        <Outlet/>
    </div>
  )
}

export default Users