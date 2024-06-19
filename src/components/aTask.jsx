import React from 'react';
import Joi from 'joi-browser';
import { getTask, getTypes, saveTask, getSeverities } from '../services/tasks';
import Form from './common/form';

class ATask extends Form { 
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
            .label('Title')
            .trim()
            .max(20),
        description: Joi
            .string()
            .required()
            .label('Description')
            .trim()
            .max(30),
        type: Joi
            .required()
            .label('Type'),
        severity: Joi
            .required()
            .label('Severity'),
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
        const { data, severities, types } = this.state;
        const { severity, type } = this.state.data;

        this.setState({ severity: severities[severity], type: types[type] });
        saveTask(data);
        this.props.history.replace('/');
    }

    render() { 
        const { types, severities } = this.state;

        return <div className='container' style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <form onSubmit={ this.handleSubmit } className='border-top border-bottom pb-4'>
                { this.renderInput('title', 'Title') }
                { this.renderInput('description', 'Description') }
                { this.renderSelect('type', 'Type', types) }
                { this.renderSelect('severity', 'Severity', severities) }
                { this.renderButton('Save') }
            </form>
        </div>
    }
}
 
export default ATask;