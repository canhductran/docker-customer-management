import React from 'react';

import CreateCustomerRecordComponent from './../../components/create-customer-record/CreateCustomerRecordComponent.jsx';

import './create-customer-record-page.scss';

const CreateCustomerRecordPage = () => (
  <div>
    <h1 className='create-customer-record-page-title'>Create a Customer Record</h1>
    <CreateCustomerRecordComponent></CreateCustomerRecordComponent>
  </div>
);

export default CreateCustomerRecordPage;
