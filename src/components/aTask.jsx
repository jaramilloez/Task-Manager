import React from 'react';
import Joi from 'joi-browser';
import { getTask, getTypes } from '../services/tasks';
import Form from './common/form';

class LogIn extends Form { 
    state = {
        data: { 
            title: '', 
            description: '',
            type: '',
            severity: '',
        },
        types: {},
        errors: {},
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
    };

    componentDidMount() {
        const types = getTypes;
        this.setState(types);

        const taskId = this.props.match.params._id;
        if(taskId === 'new-task') return;

        const task = getTask(taskId);
        if (!task) this.props.history.replace("/notFound");

        this.setState(this.matchedTask(task));
    }

    matchedTask(task) {
        return {
            title: task.title,
            description: task.desciption,
            type: task.type,
            severity: task.severity,
        }
    }

    doSubmit = () => {
        console.log('Submitted');
        window.location.href = '/'
    }

    render() { 
        return <div className='container' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('title', 'Title') }
                { this.renderInput('description', 'Description') }
                { this.renderInput('type', 'Type') }
                { this.renderInput('severity', 'Severity') }
            </form>
        </div>
    }
}
 
export default LogIn;