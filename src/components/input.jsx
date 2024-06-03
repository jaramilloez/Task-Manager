import React from 'react';

const input = ({ name, label, error, ...rest }) => {
    return <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
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