import React from 'react';

const input = ({ name, label, error, ...rest }) => {
    return <div className="form-group my-4">
        <label htmlFor={ name } className='mb-1'>{ label }</label>
        <input 
            { ...rest }
            name={ name }
            className="form-control" 
            id={ name } 
            autoFocus={ name === 'username' ? true : false }
        />
        { error && <div className="alert alert-danger">{ error }</div> }
    </div>
}
 
export default input;