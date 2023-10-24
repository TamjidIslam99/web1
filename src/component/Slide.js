import React from 'react'
import {Link} from 'react-router-dom'

export const Slide = () => {
  return (
    <div className='Sidebar'>
        <div className='Sidebar-logo'>

        </div>
        <ul className='Sidebar-menu'>
            <li><Link to='/'>Course Objective</Link></li>
            <li><Link to='/courseLearn'>Course Learn objective</Link></li>
        </ul>
    </div>
  )
}
