import React, { Component } from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

class TasksTable extends Component {
    render() { 
    const { tasks, onDelete, onSort, sortColumn } = this.props;

    return <div className='container-fluid position-relative overflow-visible mb-4'>
        <TableHeader sortColumn={ sortColumn } onSort={ onSort } />
        <TableBody data={ tasks } onDelete={ onDelete } />
    </div>
    }
}
 
export default TasksTable;