import React from 'react';
import Joi from 'joi-browser'
import Form from './common/form'

class ATask extends Form {
    state = {
        data: {
            title: '',
            description: '', 
            type: '',
            severity: ''
        },
        error: {},
    };

    schema = {
        title: Joi
            .string()
            .required()
            .label('title'),
        description: Joi
            .string()
            .required()
            .label('description'),
        type: Joi
            .string()
            .required()
            .label('type'),
        severity: Joi
            .string()
            .required()
            .label('severity'),
        }

    handleSave = () => {
        this.props.history.replace('/')
    }

    doSubmit = () => {
        console.log('Submitted');
    }

    render() { 
        return <div className="container" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <form onSubmit={ this.handleSubmit }>
                { this.renderInput('title', 'Title') }
                { this.renderInput('description', 'Description') }
                { this.renderInput('type', 'Type') }
                { this.renderInput('severity', 'Severity') }
                { this.renderButton('Save')}
            </form>
        </div>
    }
}
 
export default ATask;