import React from 'react';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import { logInWithJwt } from '../services/authService';
import { register } from '../services/usersService';
import Form from './common/form';

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

    doSubmit = async () => {
        try{
            const response = await register(this.state.data);
            console.log(response);
            logInWithJwt('token', response.headers['auth-task']);
            this.props.history.replace("/");
        } catch(ex){
            if(ex.response && ex.response.status === 404){
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors })
            }
        }
    }

    render() { 
        return <div className='container d-flex justify-content-center flex-column forms'>
            <div className='fs-2 fw-bold my-3'>
                Sign Up
            </div>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('name', 'Name') }
                { this.renderInput('email', 'Email', 'email') }
                { this.renderInput('password', 'Password', 'password') }
                { this.renderButton('Sign Up') }
            </form>
            <div className='mt-4'>
                Already have an account? <Link to='/logInForm'>Log In here.</Link>
            </div>
        </div>
    }
}
 
export default SignUpForm;