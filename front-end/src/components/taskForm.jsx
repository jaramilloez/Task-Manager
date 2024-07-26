import React from 'react';
import Joi from 'joi-browser';
import { getTypes } from '../services/typesService';
import { getSeverities } from '../services/severitiesService';
import { getTask, saveTask } from '../services/tasksService';
import Form from './common/form';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class TaskForm extends Form { 
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
            .string(),
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
        await this.populateTypesAndGenres();
        await this.populateTask();
    }
    
    async populateTypesAndGenres() {
        const { data: types } = await getTypes();
        const { data: severities } = await getSeverities();
        this.setState({ types, severities });
    }
    
    async populateTask() {
        try {
            const taskId = this.props.match.params._id;
            if(taskId === 'new-task') return;
            
            const { data: task } = await getTask(taskId);
            this.setState({ data: this.matchedTask(task) });
        } catch (ex) {
            if(ex.response && ex.response.status === 404) 
                this.props.history.replace("/notFound");
        }
    }

    matchedTask(task) {
        return {
            _id: task._id,
            title: task.title,
            description: task.description,
            type: task.type._id,
            severity: task.severity._id,
        }
    }

    doSubmit = async () => {
        const { data, severities, types } = this.state;
        let { severity, type } = this.state.data;

        // Find the selected type and severity by matching the _id
        const selectedSeverity = severities.find(i => i._id === severity)
        const selectedType = types.find(i => i._id === type)
        // Update the data with the actual names
        if(selectedSeverity != null && selectedType != null) {
            severity = selectedSeverity;
            type = selectedType;
            
            await saveTask(data);
            this.props.history.replace('/');
        } else {
            // Handle cases where the selection is invalid
            const errors = { ...this.state.errors };
            if(!selectedSeverity) errors.severity = "Severity can't be blank";
            if(!selectedType) errors.type = "Type can't be blank";
            console.log(severities, severity)
            this.setState({ errors });
        }
    }

    render() { 
        const { types, severities } = this.state;

        return <div className='container forms'>
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
 
export default TaskForm;