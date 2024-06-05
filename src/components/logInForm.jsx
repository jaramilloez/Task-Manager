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
        return <div className='container d-flex justify-content-center flex-column' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='fs-2 fw-bold my-3'>
                Log In
            </div>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('username', 'Username')}
                { this.renderInput('password', 'Password', 'password')}
                { this.renderButton('Log In') }
            </form>
        </div>
    }
}
 
export default LogIn;