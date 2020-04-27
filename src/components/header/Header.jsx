import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <div className='container is-fullhd'>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='#'>
              <img src={`${process.env.PUBLIC_URL}/image/logoCilsy/Cilsyplus..png`} />
            </a>

            <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div id='navbarBasicExample' className='navbar-menu'>
            <div className='navbar-start'>
              <NavLink to='/' className='navbar-item'>
                Home
              </NavLink>

              <NavLink to='/books/2' className='navbar-item'>
                BookDetail
              </NavLink>

              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link'>More</a>

                <div className='navbar-dropdown'>{/* <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider">
          <a className="navbar-item">
            Report an issue
          </a> */}</div>
              </div>
            </div>

            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='buttons'>
                  <a className='button is-primary'>
                    <strong>Sign up</strong>
                  </a>
                  <a className='button is-light'>Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
