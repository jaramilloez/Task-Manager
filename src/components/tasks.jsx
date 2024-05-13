import React, { Component } from 'react';
import { getTypes } from '../services/tasks'
import ListGroup from './listGroup';
import { paginate } from '../utility/paginate'
import Pagination from './pagination';
import { deleteTask } from '../services/tasks'
import { getTasks } from '../services/tasks'


class Tasks extends Component {
    state = { 
        tasks: [],
        types: [],
        pageSize: 10,
        currentPage: 1 
    }

    styles = {
        taskCol: '       col-lg-3 col-5',
        descriptionCol: 'col-lg-5 d-none d-lg-block',
        typeCol: '       col-lg-2 col-4',
        completeCol: '   col-lg-2 col-3',
        taskCell: 'py-2 border-start border-2',
        horizontalLines: 'border-bottom border-3 border-dark-subtle',
    }

    componentDidMount() {
        const types = [{ name: 'All' }, ...getTypes()]
        this.setState({ tasks: getTasks(), types })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleTypeSelect = type => {
        this.setState({ selectedType: type, currentPage: 1 })
    }

    render() { 
        const { pageSize, currentPage, selectedType, tasks: allTasks } = this.state;
        const filtered = selectedType && selectedType._id
            ? allTasks.filter(t => t.type._id === selectedType._id) 
            : allTasks;
        const tasks = paginate( filtered, currentPage, pageSize);

        return (
            <div className='container-xxl d-flex justify-content-center' style={{ fontFamily: 'Open sans'}}>
                <div className='col-2 d-none d-md-block me-3 position-relative' style={{ top: '90px' }}>
                    <ListGroup 
                        items={ this.state.types } 
                        selectedItem={ this.state.selectedType }
                        onItemSelect={ this.handleTypeSelect } 
                    />
                </div>
                <div className='col-12 col-lg-10'>
                    <div className={`${this.styles.horizontalLines} container-fluid mt-4 position-relative overflow-x-hidden`} style={{ height: '695px' }}>
                        <div className={`${this.styles.horizontalLines} row fs-1 fw-bold`} style={{ letterSpacing: '0.1em' }}>
                            <div className={ `${this.styles.taskCol} ps-4 text-hover-primary` }>TASK</div>
                            <div className={ `${this.styles.descriptionCol}` }>DESCRIPTION</div>
                            <div className={ `${this.styles.typeCol}` }>TYPE</div>
                            <div className={ `${this.styles.completeCol}` }></div>
                        </div>
                        { tasks.sort((a, b) => b.severity._id - a.severity._id)
                            .map(task => (
                                <div 
                                    className='row rounded-4 bg-light shadow-sm fs-5 my-2 d-flex align-items-center row-hover' 
                                    key={ task._id }
                                >
                                    <div className={ `${this.styles.taskCol} ps-4` }>
                                        { task.title }
                                    </div>
                                    <div className={ `${this.styles.descriptionCol} ${this.styles.taskCell}` }>
                                        { task.description }
                                    </div>
                                    <div className={ `${this.styles.typeCol} ${this.styles.taskCell} py-2 border-start border-2` }>
                                        { task.type.name }
                                    </div>
                                    <div className={ `${this.styles.completeCol} ${this.styles.taskCell} d-flex align-items-center justify-content-center` }>
                                        <button 
                                            type='button' 
                                            className='btn btn-outline-success'
                                            onClick={ () => deleteTask(task._id) }
                                        >
                                            Complete
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className='m-0 p-2 pb-0 fs-6 fst-italic'>There are {filtered.length} tasks.</p>
                    <Pagination 
                        itemsCount={ filtered.length } 
                        pageSize={ pageSize } 
                        currentPage={ currentPage }
                        onPageChange={ this.handlePageChange } 
                    />
                </div>
            </div>
        );
    }
}

export default Tasks;