import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className='section custom-header'>
        <div className='container is-fluid'>
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand is-4'>
              <a className='navbar-item' href='#'>
                <img src={`${process.env.PUBLIC_URL}/image/logoCilsy/Cilsyplus..png`} width='112' height='28' />
              </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
              <div className='navbar-start'>
                <div className='navbar-item has-dropdown is-hoverable left-item'>
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
                </div>
                <div className='navbar-item right-item'>
                  <input className='input' type='text' placeholder='Search book  title or author'></input>
                </div>
              </div>

              <div className='navbar-end'>
                <div className='navbar-item'>
                  <img src={`${process.env.PUBLIC_URL}/image/cartLogo/cart.png`} alt='' />
                </div>
                <div className='navbar-item'>
                  <div className='vertical-line'></div>
                </div>
                <div className='navbar-item'>
                  <div className='buttons'>
                    <a className='button is-primary'>Sign In</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
