import React, { Component } from 'react';
import _ from 'lodash'
import TasksTable from './tasksTable';
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
        currentPage: 1,
        sortColumn: { path: 'severity._id', order: 'desc' },
    }

    componentDidMount() {
        const types = [{ _id: 0, name: 'All' }, ...getTypes()]
        this.setState({ tasks: getTasks(), types })
    }

    handleDelete = taskId => {
        deleteTask(taskId);
        this.setState({ tasks: getTasks() })
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleTypeSelect = type => {
        this.setState({ selectedType: type, currentPage: 1 })
    }

    handleSort = path => {
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path){
            if (sortColumn.path === 'severity._id' && sortColumn.order === 'desc'){
                sortColumn.path = path;
                sortColumn.order = 'asc'
            } else if (sortColumn.order === 'asc'){
                sortColumn.order = 'desc';
            } else{
                sortColumn.path = 'severity._id';
            }
        }
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }
        this.setState({ sortColumn })
    }

    render() { 
        const { pageSize, currentPage, sortColumn, selectedType, tasks: allTasks } = this.state;

        const filtered = selectedType && selectedType._id
            ? allTasks.filter(t => t.type._id === selectedType._id) 
            : allTasks;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const tasks = paginate( sorted, currentPage, pageSize);

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
                    <TasksTable 
                        tasks={ tasks } 
                        onDelete={ this.handleDelete} 
                        onSort={ this.handleSort }
                    />
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