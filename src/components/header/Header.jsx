import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Login from '../login/LoginPopup';
import Appendix from '../appendix/Appendix';

export default function Header() {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <header className='section custom-header'>
        <div className='container is-fluid'>
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand is-4'>
              <div className='navbar-item' href='#'>
                <a href='http://localhost:3000/'>
                  <img src={`${process.env.PUBLIC_URL}/image/logoCilsy/Cilsyplus..png`} width='112' height='28' alt='' />
                </a>
              </div>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
              <div className='navbar-start'>
                <div className='navbar-item has-dropdown is-hoverable left-item'>
                  <div className='navbar-link'>Categories</div>

                  <div className='navbar-dropdown'>
                    <div className='navbar-item'>
                      <div className='columns is-multiline is-full'>
                        <div className='column is-one-third'>
                          <Appendix />
                        </div>
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
                  <a href=''>
                    <img src={`${process.env.PUBLIC_URL}/image/cartLogo/cart.png`} alt='' />
                  </a>
                </div>
                <div className='navbar-item'>
                  <div className='vertical-line'></div>
                </div>
                <div className='navbar-item'>
                  <div className='buttons'>
                    <div className='button is-primary' show={showModal} onClick={() => setModal(true)}>
                      Login
                    </div>
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
