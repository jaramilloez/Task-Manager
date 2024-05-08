import React, { Component } from 'react';
import { tasks } from '../services/tasks'
import Pagination from './pagination';


class Tasks extends Component {
    state = { 
        tasks,
        pageSize: 5 
    }

    styles = {
        taskCol: '       col-lg-3 col-5',
        descriptionCol: 'col-lg-5 d-none d-lg-block',
        typeCol: '       col-lg-2 col-4',
        completeCol: '   col-lg-2 col-3',
        taskCell: 'py-3 border-start border-2',
        horizontalLines: 'border-bottom border-3 border-dark-subtle',
    }

    deleteTask = taskId => {
        this.setState({ tasks: this.state.tasks.filter(c => c._id !== taskId)})
    }

    pageChange = page => {
        console.log(page)
    }

    render() { 
        return (
            <React.Fragment>
                <div className={`${this.styles.horizontalLines} container-xl py-4`} style={{ fontFamily: 'Open sans' }}>
                    <div className='row rounded-3 fs-1 fw-bold' style={{ letterSpacing: '0.1em' }}>
                        <div className={ `${this.styles.taskCol} ps-4 text-hover-primary` }>TASK</div>
                        <div className={ `${this.styles.descriptionCol}` }>DESCRIPTION</div>
                        <div className={ `${this.styles.typeCol}` }style={{'&:hover':{ backgroundColor: 'black' }}}>TYPE</div>
                        <div className={ `${this.styles.completeCol}` }></div>
                    </div>
                    <div className={`${this.styles.horizontalLines}`}></div>
                    { this.state.tasks.sort((a, b) => b.severity._id - a.severity._id)
                        .map(task => (
                            <div 
                            className='row rounded-4 bg-light shadow-sm fs-4 my-3 d-flex align-items-center row-hover' 
                            key={ task._id }
                            >
                                <div className={ `${this.styles.taskCol} ps-4` }>
                                    { task.title }
                                </div>
                                <div className={ `${this.styles.descriptionCol} ${this.styles.taskCell}` }>
                                    { task.description }
                                </div>
                                <div className={ `${this.styles.typeCol} ${this.styles.taskCell} py-2 border-start border-2` }>
                                    { task.type }
                                </div>
                                <div className={ `${this.styles.completeCol} ${this.styles.taskCell} d-flex align-items-center justify-content-center` }>
                                    <button 
                                        type='button' 
                                        className='btn btn-outline-success'
                                        onClick={ () => this.deleteTask(task._id) }
                                    >
                                        Complete
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Pagination itemsCount={ this.state.tasks.length } pageSize={ this.state.pageSize } onPageChange={ this.pageChange } />
            </React.Fragment>
        );
    }
}

export default Tasks;