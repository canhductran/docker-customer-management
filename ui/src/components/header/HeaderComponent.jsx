import React from 'react';

import {Link} from 'react-router-dom';

import './header.scss';

const Header = () => (
    <div className='header'>
        <div className='options'>
          <Link className='option' to='/'>
              CREATE CUSTOMER
          </Link>
          <Link className='option' to='/searchcustomers'>
              SEARCH CUSTOMER
          </Link>
        </div>
    </div>
);

export default Header;
