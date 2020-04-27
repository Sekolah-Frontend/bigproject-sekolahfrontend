import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand is-4'>
          <a className='navbar-item' href='#'>
            <img src={`${process.env.PUBLIC_URL}/image/logoCilsy/Cilsyplus..png`} width='112' height='28' />
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Categories</a>

              <div className='navbar-dropdown'>
                <div className='navbar-item'>
                  <div className='columns is-multiline is-full'>
                    <div className='column is-one-third'>abc</div>
                    <div className='column is-one-third'>abc</div>
                    <div className='column is-one-third'>abc</div>
                  </div>
                </div>
              </div>
              <input className='input' type='text' placeholder='Search book  title or author'></input>
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
    </>
  );
}
