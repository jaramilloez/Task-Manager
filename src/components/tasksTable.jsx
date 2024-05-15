import React from 'react';

const TasksTable = props => {
    const { tasks, onDelete, onSort } = props;

    const styles = {
        taskCol: '       col-lg-3 col-5',
        descriptionCol: 'col-lg-5 d-none d-lg-block',
        typeCol: '       col-lg-2 col-4',
        completeCol: '   col-lg-2 col-3',
        taskCell: 'py-2 border-start border-2',
        horizontalLines: 'border-bottom border-3 border-dark-subtle',
    }

    return ( 
        <div className={`${styles.horizontalLines} container-fluid mt-4 position-relative overflow-x-hidden`} style={{ height: '695px' }}>
            <div className={`${styles.horizontalLines} row fs-1 fw-bold`} style={{ letterSpacing: '0.1em' }}>
                <div onClick={ () => onSort('title') } className={ `${styles.taskCol} ps-4 text-hover-primary` }>TASK</div>
                <div onClick={ () => onSort('description') } className={ `${styles.descriptionCol}` }>DESCRIPTION</div>
                <div onClick={ () => onSort('type.name') } className={ `${styles.typeCol}` }>TYPE</div>
                <div className={ `${styles.completeCol}` }></div>
            </div>
            { tasks.map(task => (
                <div 
                    className='row rounded-4 bg-light shadow-sm fs-5 my-2 d-flex align-items-center row-hover' 
                    key={ task._id }
                >
                    <div className={ `${styles.taskCol} ps-4` }>
                        { task.title }
                    </div>
                    <div className={ `${styles.descriptionCol} ${styles.taskCell}` }>
                        { task.description }
                    </div>
                    <div className={ `${styles.typeCol} ${styles.taskCell} py-2 border-start border-2` }>
                        { task.type.name }
                    </div>
                    <div className={ `${styles.completeCol} ${styles.taskCell} d-flex align-items-center justify-content-center` }>
                        <button 
                            type='button' 
                            className='btn btn-outline-success'
                            onClick={ () => onDelete(task._id) }
                        >
                            Complete
                        </button>
                    </div>
                </div>
            ))
            }
        </div>
     );
}
 
export default TasksTable;