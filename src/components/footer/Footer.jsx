import React from 'react';

export default function Footer() {
  return (
    <>
      <div className=' columns footer'>
        <div className='column'>
          <h4>Customer Service</h4>
          <br />
          <ul>
            <li>Help Center</li>
            <li>Payment</li>
            <li>CilsyPay</li>
            <li>Shipping</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='column'>
          <h4>About CilsyPlus Bookstore</h4>
          <br />
          <ul>
            <li>About Us</li>
            <li>Offline Store</li>
            <li>Cooperation</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Follow Us</h4>
          <br />
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Download CilsyPlus</h4>
          <br />
          <ul>
            <li>
              <img src='image/googleStore-AppelStore/Badge App Store.png' />
            </li>
            <li>
              <img src='image/googleStore-AppelStore/Badge Google Play.png' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
