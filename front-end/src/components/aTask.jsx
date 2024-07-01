import React from 'react';
import Joi from 'joi-browser';
import { getSeverities } from '../services/severitiesService';
import { getTask, getTypes, saveTask } from '../services/faketasks';
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

    async componentDidMount() {
        const types = getTypes();
        const severities = await getSeverities();
        this.setState({ types, severities: severities.data });

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
        let { severity, type } = this.state.data;

        // Find the selected type and severity by matching the _id
        const selectedSeverity = severities[severity._id]
        const selectedType = types[type._id]
        // Update the data with the actual names
        if (selectedSeverity != null && selectedType != null) {
            severity = selectedSeverity;
            type = selectedType;
            
            saveTask(data);
            this.props.history.replace('/');
        } else {
            // Handle cases where the selection is invalid
            const errors = { ...this.state.errors };
            if (!selectedSeverity) errors.severity = "Severity can't be blank";
            if (!selectedType) errors.type = "Type can't be blank";
            this.setState({ errors });
        }
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