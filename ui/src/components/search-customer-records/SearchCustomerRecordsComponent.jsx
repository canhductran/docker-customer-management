import React from 'react';

import axios from 'axios';

import FormInput from './../form-input/FormInputComponent.jsx';

import CustomButton from './../custom-button/CustomButtonComponent.jsx';

import SearchCustomerRecordsResultList from './../search-customer-records-results/SearchCustomerRecordsResultList.jsx';

import './search-customer-records.scss';

class SearchCustomerRecordsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerTelephoneNumber: '',
        customerResults: []
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const {customerTelephoneNumber} = this.state;

    axios.request({
      method: 'GET',
      url: 'http://localhost:3001/api/customers',
      params: {
        customerTelephoneNumber: customerTelephoneNumber
      },

    }).then((res)=>{
      this.setState({
        customerResults: res.data
      });
    }).catch((err)=>{
      console.log("API call unsucessfull", err);
    })
  }

  handleChange = event => {
      const {value, name} = event.target;

      this.setState({
          [name]: value
      });
  }

  render() {
    const {customerTelephoneNumber} = this.state;

    return (
      <div>
        <form className='search-customer-records' onSubmit={this.handleSubmit}>
            <FormInput
                type='number'
                name='customerTelephoneNumber'
                value={customerTelephoneNumber}
                label='Customer Telephone Number'
                onChange={this.handleChange}
                required></FormInput>

            <CustomButton type='submit'>Search</CustomButton>
        </form>

        <SearchCustomerRecordsResultList customerResults={this.state.customerResults}></SearchCustomerRecordsResultList>
      </div>
    );
  }
};

export default SearchCustomerRecordsComponent;
