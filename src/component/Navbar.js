import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Todowrapper.js">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/CourseLearnWrapper.js">Features</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
