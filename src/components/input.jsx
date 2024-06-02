import React from 'react';

const input = ({ name, label, value, onChange }) => {
    return <div className="form-group">
        <label htmlFor={ name }>{ label }</label>
        <input 
            className="form-control" 
            type="text" 
            id={ name } 
            value={ value }
            onChange={ onChange }
            name={ name }
            autoFocus={ name === 'username' 
                ? true
                : false
            }
        />
    </div>
}
 
export default input;