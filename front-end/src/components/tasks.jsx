import React, { Component } from 'react';
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { getTasks, deleteTask } from '../services/tasksService';
import { getTypes } from '../services/typesService'
import TasksTable from './tasksTable';
import Filter from './filter';
import { paginate } from '../utility/paginate'
import Pagination from './pagination';


class Tasks extends Component {
    state = { 
        tasks: [],
        types: [],
        pageSize: 10,
        currentPage: 1,
        sortColumn: { path: 'severity.importance', order: 'desc' },
    }

    async componentDidMount() {
        const { data } = await getTypes();
        const types = [{ _id: null, name: 'All' }, ...data]
        const { data: tasks } = await getTasks();
        this.setState({ tasks, types });
    }

    handleDelete = async taskId => {
        const originalTasks = this.state.tasks;
        const tasks = originalTasks.filter(t => t._id !== taskId);
        this.setState({ tasks });

        try {
            await deleteTask(taskId);
        } catch (ex) {
            if (ex.response && ex.response.status === 404) 
                toast.error('This task has already been deleted.');

            this.setState({ tasks: originalTasks });
        }
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
        window.scrollTo({ top: 0 })
    }

    handleFilterSelect = type => {
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

        return <div className='container-xxl d-flex justify-content-center' style={{ padding: '0 50px'}}>
            <div className='me-3 col-2 d-none d-md-block position-relative' style={{ top: '60px' }}>
                <Filter 
                    items={ this.state.types } 
                    selectedItem={ this.state.selectedType }
                    onItemSelect={ this.handleFilterSelect } 
                />
                <p className='m-2 fst-italic text-end' style={{ color: 'rgb(190, 200, 200)'}}>{ itemsCount } results</p>
            </div>
            <div className='col-10'>
                <TasksTable 
                    tasks={ tasks } 
                    sortColumn={ sortColumn }
                    onDelete={ this.handleDelete } 
                    onSort={ this.handleSort }
                />
                <Link to='/aTask/new-task'>
                    <button className='ms-2 px-4 btn btn-outline-primary rounded-pill'>
                        Add new task
                    </button>
                </Link>
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