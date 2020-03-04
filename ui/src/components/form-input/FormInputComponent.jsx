import React from 'react';

import './form-input.scss';

const FormInput = ({label, onChange, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={onChange} {...otherProps}/>
        {
            label ?
            <label className='form-input-label'>{label}</label> :
            null
        }
    </div>
)

export default FormInput;
