import React from 'react';

const Select = ({ name, label, error, options, value, ...rest }) => {
    return <div className="form-group my-4">
        <label htmlFor={ name } className='mb-1'>{ label }</label>
        <select 
            { ...rest }
            name={ name }
            value={ value._id }
            className="form-select"
            id={ name } 
        >
            <option disabled={ value._id }></option>
            { options.map(option => (
                <option key={ option._id } value={ option._id }>
                    { option.name }
                </option>
            ))}
        </select>
        { error && <div className="alert alert-danger">{ error }</div> }
    </div>
};

export default Select;