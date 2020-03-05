import React from 'react';

import axios from 'axios';

import FormInput from './../form-input/FormInputComponent.jsx';

import CustomButton from './../custom-button/CustomButtonComponent.jsx';

import { Message } from 'semantic-ui-react'

import SearchCustomerRecordsResultList from './../search-customer-records-results/SearchCustomerRecordsResultList.jsx';

import './search-customer-records.scss';

class SearchCustomerRecordsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            customerResults: [],
            errors: [],
        }
    }

    validate(phone) {
        let errors = [];

        if (!phone || phone.toString().length > 11) {
            errors.push('You can only search with less than 11 digits');
        }

        return errors;
    }

    handleSubmit = event => {
        event.preventDefault();

        const {phone} = this.state;
        const validationErrors = this.validate(phone);

        this.setState({
            errors: validationErrors,
            customerResults: []
        });

        if (validationErrors.length) {
            return;
        }

        axios.request({
            method: 'GET',
            url: 'http://localhost:3001/api/customers',
            params: {
                phone: phone
            }
        }).then((res) => {
            this.setState({
                customerResults: res.data,
                errors: []
            });
        }).catch((err) => {
            this.setState({
                customerResults: [],
                errors: ['An unexpected error has happened. Please try again.']
            })
            console.log("API call unsucessfull", err);
        });
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {phone} = this.state;

        return (
            <div className='search-customer-records-container'>
                <form className='search-customer-records' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='number'
                        name='phone'
                        value={phone}
                        label='Customer Telephone Number'
                        onChange={this.handleChange}
                        maxlength="11"
                        minlength="1"
                        required>
                    </FormInput>

                    <CustomButton type='submit'>Search</CustomButton>
                </form>

                {
                    this.state.errors && this.state.errors.length ?
                    <Message
                        error
                        header='Failure'
                        list={this.state.errors}
                        className='validation-errors'
                    />
                    :
                    null
                }

                <SearchCustomerRecordsResultList customerResults={this.state.customerResults}></SearchCustomerRecordsResultList>
            </div>
        );
    }
};

export default SearchCustomerRecordsComponent;
