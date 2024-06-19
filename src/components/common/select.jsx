import React from 'react';

const Select = ({ name, label, error, options, selected, value, ...rest }) => {
    return <div className="form-group my-4">
        <label htmlFor={ name } className='mb-1'>{ label }</label>
        <select 
            { ...rest }
            name={ name }
            className="form-select"
            id={ name } 
        >
            <option></option>
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
}
 
export default Select;