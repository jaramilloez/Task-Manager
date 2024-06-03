import React from 'react';
import Joi from 'joi-browser';
import Form from './form'

class LogIn extends Form { 
    state = {
        data: { 
            username: '', 
            password: '' 
        },
        errors: {},
    };

    schema = {
        username: Joi
            .string()
            .required()
            .label('Username'),
        password: Joi
            .string()
            .required()
            .label('Password')
    };

    doSubmit = () => {
        console.log('Submitted');
    }

    render() { 
        return <div className='container d-flex justify-content-center mt-4 flex-column' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='fs-2 fw-bold'>
                Log In
            </div>
            <form onSubmit={ this.handleSubmit }>
                { this.renderInput('username', 'Username')}
                { this.renderInput('password', 'Password', 'password')}
                { this.renderButton('Log In') }
            </form>
        </div>
    }
}
 
export default LogIn;