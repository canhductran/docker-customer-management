import React from 'react';

import axios from 'axios';

import FormInput from './../form-input/FormInputComponent.jsx';

import CustomButton from './../custom-button/CustomButtonComponent.jsx';

import { Message } from 'semantic-ui-react'

import './create-customer-record.scss';

class CreateCustomerRecordComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        customerName: '',
        customerTelephoneNumber: '',
        errors: []
    }
  }

  validate(customerName, customerTelephoneNumber) {
    let errors = [];

    if (!customerTelephoneNumber || customerTelephoneNumber.toString().length !== 11) {
        console.log(customerTelephoneNumber);
        errors.push('Telephone number has to have 11 digits')
    }

    if (!customerName || !customerName.length) {
        errors.push('Customer Name cannot be empty');
    }

    return errors;
  }

  handleSubmit = event => {
    event.preventDefault();

    const {customerName, customerTelephoneNumber} = this.state;

    const validationErrors = this.validate(customerName, customerTelephoneNumber);

    this.setState({
      errors: validationErrors
    });

    if (validationErrors.length) {
      return;
    }

    axios.request({
      method: 'POST',
      url: 'http://localhost:3001/api/customers',
      data: {
        customerName: customerName,
        customerTelephoneNumber: customerTelephoneNumber
      },

    }).then((res)=>{
      let result = res.data;

      if (!result) {
        this.setState({
          errors: ['A customer with the same telephone number already exists']
        });
      }
    }).catch((err)=>{
      console.log("api call unsucessfull", err);
    })
  }

  handleChange = event => {
      const {value, name} = event.target;

      this.setState({
          [name]: value
      });
  }

  render() {
    const {customerName, customerTelephoneNumber} = this.state;

    return (
      <div className='create-customer-record-container'>
        <form className='create-customer-record' onSubmit={this.handleSubmit}>
            <FormInput
                type='text'
                name='customerName'
                value={customerName}
                label='Customer Name'
                onChange={this.handleChange}
                required></FormInput>

            <FormInput
                type='number'
                name='customerTelephoneNumber'
                value={customerTelephoneNumber}
                label='Customer Telephone Number'
                onChange={this.handleChange}
                required></FormInput>

            <CustomButton type='submit'>Create</CustomButton>
        </form>

        {
          this.state.errors && this.state.errors.length ?
          <Message
            error
            header='There was some errors with your submission'
            list={this.state.errors}
            className='validation-errors'
          />
          :
          null
        }
      </div>
    );
  }
};

export default CreateCustomerRecordComponent;
