import React from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom'
import { login } from '../services/authService';
import Form from './common/form'

class LogIn extends Form { 
    state = {
        data: { 
            email: '', 
            password: '' 
        },
        errors: {},
    };

    schema = {
        email: Joi
            .string()
            .required()
            .label('Email')
            .email(),
        password: Joi
            .string()
            .required()
            .label('Password')
            .min(8),
    };

    doSubmit = async () => {
        try {
            const { data } = this.state

            await login(data.email, data.password);
            window.location = '/';
        } catch (ex) {
            if(ex.response && ex.response.status === 400){
                const errors = { ...this.state.errors };
                errors.email = ex.response.data;
                this.setState({ errors });
            }
        }
    }

    render() { 
        return <div className='container d-flex justify-content-center flex-column' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='fs-2 fw-bold my-3'>
                Log In
            </div>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('email', 'Email', 'email') }
                { this.renderInput('password', 'Password', 'password')}
                { this.renderButton('Log In') }
            </form>
            <div className='formTextLink mt-4'>
                New? <Link to='/signUpForm'>Sign Up</Link> here.
            </div>
        </div>
    }
}
 
export default LogIn;