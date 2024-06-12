import React from 'react';
import Joi from 'joi-browser';
import { getTask, getTypes, saveTask, getSeverities } from '../services/tasks';
import Form from './common/form';

class LogIn extends Form { 
    state = {
        data: { 
            title: '', 
            description: '',
            type: '',
            severity: '',
        },
        types: [],
        severities: [],
        errors: {},
    };

    schema = {
        _id: Joi
            .number(),
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
        const types = getTypes();
        this.setState({ types });

        const severities = getSeverities();
        this.setState({ severities });

        const taskId = this.props.match.params._id;
        if(taskId === 'new-task') return;

        const task = getTask(taskId);
        if (!task) this.props.history.replace("/notFound");

        this.setState({ data: this.matchedTask(task) });
    }

    matchedTask(task) {
        return {
            _id: task._id,
            title: task.title,
            description: task.description,
            type: task.type,
            severity: task.severity,
        }
    }

    doSubmit = () => {
        saveTask(this.state.data);
        this.props.history.replace('/');
    }

    render() { 
        const { types, severities } = this.state
        const { type, severity } = this.state.data
        return <div className='container' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('title', 'Title') }
                { this.renderInput('description', 'Description') }
                { this.renderSelect('type', 'Type', types, type._id) }
                { this.renderSelect('severity', 'Severity', severities, severity._id) }
                { this.renderButton('Save') }
            </form>
        </div>
    }
}
 
export default LogIn;