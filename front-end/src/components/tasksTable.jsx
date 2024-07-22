import React from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';

const TasksTable = ({ tasks, onDelete, onSort, sortColumn }) => {
    return <div className='container-fluid position-relative mb-4'>
        <TableHeader sortColumn={ sortColumn } onSort={ onSort } />
        <TableBody data={ tasks } onDelete={ onDelete } />
    </div>
}
 
export default TasksTable;