import React from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom'
import Form from './common/form'

class SignUpForm extends Form { 
    state = {
        data: { 
            name: '',
            email: '', 
            password: '',
        },
        errors: {},
    };

    schema = {
        name: Joi
            .string()
            .required()
            .label('Name')
            .trim(),
        email: Joi
            .string()
            .required()
            .label('Email')
            .trim()
            .email(),
        password: Joi
            .string()
            .required()
            .label('Password')
            .min(8),
    };

    doSubmit = () => {
        console.log('Submitted');
        this.props.history.replace("/")
    }

    render() { 
        return <div className='container d-flex justify-content-center flex-column' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='fs-2 fw-bold my-3'>
                Sign Up
            </div>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('name', 'Name') }
                { this.renderInput('email', 'Email', 'email') }
                { this.renderInput('password', 'Password', 'password') }
                <Link to='/'>
                    { this.renderButton('Sign Up') }
                </Link>
            </form>
            <div className='formTextLink mt-4'>
                Already have an account? <Link to='/logInForm'>Log In</Link> here.
            </div>
        </div>
    }
}
 
export default SignUpForm;