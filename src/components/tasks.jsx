import React, { Component } from 'react';
import { tasks } from '../fakeTaskService'

class Tasks extends Component {
    state = {}
    render() { 
        return (
            <div className='container'>
                <div className='row rounded-3 fs-2 fw-bold'>
                    <div className='col'>Task</div>
                    <div className='col'>Description</div>
                    <div className='col'>Category</div>
                    <div className='col'>Completed</div>
                </div>
                { tasks.map(task => (
                    <div className='row bg-light rounded-3 shadow-sm fs-4 p-1' key={ task._id }>
                        <div className='col'>
                            { task.title }
                        </div>
                        <div className='col'>
                            { task.task }
                        </div>
                        <div className='col'>
                            { task.category }
                        </div>
                        <div className='col'>
                            <input 
                                type='checkbox' 
                                className='form-check' 
                                checked={ task.completed } 
                                onChange={event => this.completedTask(task._id, event.target.checked)}>
                            </input>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    completedTask(taskId, isChecked) {
        console.log(isChecked)
    }
}
 
export default Tasks;