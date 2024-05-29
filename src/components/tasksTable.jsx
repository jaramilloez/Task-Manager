import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

class TasksTable extends Component {
    render() { 
    const { tasks, onDelete, onSort, sortColumn } = this.props;

    return <div className='container-fluid mt-4 position-relative overflow-visible' style={{ height: '695px' }}>
        <TableHeader sortColumn={ sortColumn } onSort={ onSort } />
        <TableBody data={ tasks } onDelete={ onDelete } />
    </div>
    }
}
 
export default TasksTable;