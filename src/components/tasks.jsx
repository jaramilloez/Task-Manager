import React, { Component } from 'react';
import { tasks } from '../fakeTaskService'

class Tasks extends Component {
    render() { 
        return (
            <div className='container-xl py-4 border-bottom border-3 border-dark-subtle' style={{fontFamily: 'Open sans'}}>
                <div className='row rounded-3 fs-1 fw-bold'>
                    <div className='col-5 col-lg-3 ps-4'>Task</div>
                    <div className='col-lg-5 d-none d-lg-block'>Description</div>
                    <div className='col-5 col-lg-3'>Type</div>
                    <div className='col-2 col-lg-1'></div>
                </div>
                { tasks.sort((a, b) => b.severity._id - a.severity._id)
                    .map(task => (
                        <div className='row rounded-4 bg-light shadow-sm fs-5 my-3' key={ task._id }>
                            <div className='col-5 col-lg-3 py-3 border-end border-2 ps-4'>
                                { task.title }
                            </div>
                            <div className='col-lg-5 py-3 border-end border-2 d-none d-lg-block'>
                                { task.task }
                            </div>
                            <div className='col-5 col-lg-3 py-3 border-end border-2'>
                                { task.category }
                            </div>
                            <div className='col-2 col-lg-1 py-3 text-center'>
                                <input 
                                    type='checkbox' 
                                    className='form-check-input'
                                    style={{height: '100%', width: '28px'}}
                                    checked={ task.completed }
                                    readOnly>
                                </input>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
 
export default Tasks;