import React from 'react';
import './breadcrumb.scss';

const Breadcrumb = () => {
  return (
    <nav class='breadcrumb' aria-label='breadcrumbs'>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Art</a>
        </li>
        <li class='is-active'>
          <a href='#' aria-current='page'>
            Steal Like an Artist
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
