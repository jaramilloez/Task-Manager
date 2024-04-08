import React, { Component } from 'react';
import { tasks } from '../fakeTaskService'

class Tasks extends Component {
    columns = {
        title: 'col-5 col-lg-3',
        task: 'col-lg-4 d-none d-lg-block',
        category: 'col-5 col-lg-3',
        completed: 'col-2 col-lg-2'
    }
    render() { 
        return (
            <div className='container-xl py-4 border-bottom border-3 border-dark-subtle' style={{fontFamily: 'Open sans'}}>
                <div className='row rounded-3 fs-1 fw-bold'>
                    <div className={this.columns.title + ' ps-4'}>Task</div>
                    <div className={this.columns.task}>Description</div>
                    <div className={this.columns.category}>Type</div>
                    <div className={this.columns.completed}></div>
                </div>
                { tasks.sort((a, b) => b.severity._id - a.severity._id)
                    .map(task => (
                        <div className='row rounded-4 bg-light shadow-sm fs-5 my-3' key={ task._id }>
                            <div className={this.columns.title + ' py-3 border-end border-2 ps-4'}>
                                { task.title }
                            </div>
                            <div className={this.columns.task + ' py-3 border-end border-2'}>
                                { task.task }
                            </div>
                            <div className={this.columns.category + ' py-3 border-end border-2'}>
                                { task.category }
                            </div>
                            <div className={this.columns.completed + ' py-3 text-center'}>
                                <button 
                                    type='button' 
                                    className='btn btn-outline-success'
                                    style={{height: '30px'}}>
                                        Complete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}
 
export default Tasks;