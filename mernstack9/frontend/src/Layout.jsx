import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
     <div>
    <Link to='home'>Home</Link>|
    <Link to='insert'>Insert</Link>|
    <Link to='display'>Display</Link>
    </div>

    <div>
        <Outlet />
    </div>
    
    </>
   
  )
}

export default Layout