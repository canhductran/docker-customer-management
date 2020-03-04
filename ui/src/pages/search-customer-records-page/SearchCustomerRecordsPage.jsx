import React from 'react';

import SearchCustomerRecordsComponent from './../../components/search-customer-records/SearchCustomerRecordsComponent.jsx';

import './search-customer-records-page.scss';

const SearchCustomerRecordsPage = () => (
  <div>
    <h1 className='search-customer-records-page-title'>Search Customer Records</h1>
    <SearchCustomerRecordsComponent></SearchCustomerRecordsComponent>
  </div>
);

export default SearchCustomerRecordsPage;
