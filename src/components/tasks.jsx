import React, { Component } from 'react';
import _ from 'lodash'
import { Link } from 'react-router-dom'
import TasksTable from './tasksTable';
import { getTypes } from '../services/tasks'
import Filter from './filter';
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
        window.scrollTo({ top: 0 })
    }

    handleTypeSelect = type => {
        this.setState({ selectedType: type, currentPage: 1 })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    getPagedData = () => {
        const { pageSize, currentPage, sortColumn, selectedType, tasks: allTasks } = this.state;

        const filtered = selectedType && selectedType._id
            ? allTasks.filter(t => t.type._id === selectedType._id) 
            : allTasks;
        
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const tasks = paginate( sorted, currentPage, pageSize);
        return { itemsCount: filtered.length, data: tasks }

    }

    render() { 
        const { pageSize, currentPage, sortColumn } = this.state;
        const { itemsCount, data: tasks } = this.getPagedData();

        return <div className='container-xxl d-flex justify-content-center' style={{ fontFamily: 'Open sans'}}>
            <div className='me-3 col-2 d-none d-md-block position-relative' style={{ top: '60px' }}>
                <div className='row'>
                    <button className='px-3 btn btn-primary rounded-pill'>Add new task</button>
                </div>
                <div className='row'>
                    <Filter 
                        items={ this.state.types } 
                        selectedItem={ this.state.selectedType }
                        onItemSelect={ this.handleTypeSelect } 
                    />
                </div>
            </div>
            <div className='col-10'>
                <TasksTable 
                    tasks={ tasks } 
                    sortColumn={ sortColumn }
                    onDelete={ this.handleDelete} 
                    onSort={ this.handleSort }
                />
                <p className='m-0 ps-3 fst-italic'>{ itemsCount } results</p>
                <Pagination 
                    itemsCount={ itemsCount } 
                    pageSize={ pageSize } 
                    currentPage={ currentPage }
                    onPageChange={ this.handlePageChange } 
                />
            </div>
        </div>;
    }
}

export default Tasks;