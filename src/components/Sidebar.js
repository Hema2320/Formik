import React from 'react';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
      <div>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>
    <hr class="sidebar-divider my-0" />
    
    <li class="nav-item active">
      <Link to='/dashboard'>
            <a class="nav-link" href="index.html">
              <i class="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </a>
      </Link>
    </li>
    <hr class="sidebar-divider" />
    <div class="sidebar-heading">Movies</div>

    <li class="nav-item">
      <Link to='/add-movies'>
          <a className = 'nav-link' href="#">
              <span>Add Movies</span>
          </a>
      </Link>
    </li>
    
    <li class="nav-item">
      <Link to='/all-movies'>
          <a  class="nav-link" href="#">
            <span>All Movies</span>
          </a>
      </Link>
    </li>
    <hr class="sidebar-divider" />
    
    <li class="nav-item">
      <Link to='/form-validation'>
          <a  class="nav-link" href="#">
            <span>Form</span>
          </a>
      </Link>
    </li>
    <hr class="sidebar-divider" />
  </ul>
</div>

  );
}

export default Sidebar;
