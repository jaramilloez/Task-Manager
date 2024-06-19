import React from 'react';

<<<<<<< HEAD
const Select = ({ name, label, error, options, value, ...rest }) => {
=======
const Select = ({ name, label, error, options, selected, value, ...rest }) => {
>>>>>>> 106e8cfcc6b021677689fb01e3730ece27afde13
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
                <option 
                    key={ option._id } 
                    value={ option._id }
                >
                    { option.name }
                </option>
            ))}
        </select>
        { error && <div className="alert alert-danger">{ error }</div> }
    </div>
};

export default Select;