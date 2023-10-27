import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Course objective</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="CLO">Course Learning Outcome</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Cinfo">Course Informations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Cinfo23">Course Info Table</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Cinfo33">Course Assesment</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

