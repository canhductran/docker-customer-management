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
            name: '',
            phone: '',
            errors: [],
            successMessage: ''
        }
    }

    validate(name, phone) {
        let errors = [];

        if (!phone || phone.toString().length !== 11) {
            errors.push('Telephone number has to have 11 digits')
        }

        if (!name || !name.length) {
            errors.push('Customer Name cannot be empty');
        }

        return errors;
    }

    handleSubmit = event => {
        event.preventDefault();

        const {name, phone} = this.state;
        const validationErrors = this.validate(name, phone);

        this.setState({
            errors: validationErrors,
            successMessage: ''
        });

        if (validationErrors.length) {
            return;
        }

        axios.request({
            method: 'POST',
            url: 'http://localhost:3001/api/customers',
            data: {
                name: name,
                phone: phone
            }
        }).then((res) => {
            let result = res.data;

            if (result) {
                this.setState({
                    successMessage: `Customer ${name} has been created`,
                    errors: []
                })
            }
        }).catch((err) => {
            let errorMessage = err.response.data.error;

            if (!errorMessage) {
                errorMessage = 'An unexpected error happened. Please try again.';
            }

            this.setState({
                successMessage: '',
                errors: [errorMessage]
            });

            console.error("API call unsucessfull", err);
        });
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const {name, phone} = this.state;

        return (
            <div className='create-customer-record-container'>
                <form className='create-customer-record' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='name'
                        value={name}
                        label='Customer Name'
                        onChange={this.handleChange}
                        maxLength='50'
                        minLength='5'
                        required>
                    </FormInput>

                    <FormInput
                        type='number'
                        name='phone'
                        value={phone}
                        label='Customer Phone Number'
                        onChange={this.handleChange}
                        required>
                    </FormInput>

                    <CustomButton type='submit'>Create</CustomButton>
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

                {
                    this.state.successMessage ?
                    <Message
                        positive
                        className='success-message'>
                        <Message.Header>Success</Message.Header>
                        <p>
                            {this.state.successMessage}
                        </p>
                    </Message>
                    :
                    null
                }
            </div>
        );
    }
};

export default CreateCustomerRecordComponent;
