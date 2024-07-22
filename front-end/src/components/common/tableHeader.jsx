import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../../utility/commonStyles';

const TableHeader = ({ sortColumn, onSort }) => { 
    const raiseSort = path => {
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
        onSort(sortColumn)
    }

    const renderSortIcon = path => {
        if (sortColumn.path !== path) return null;
        if (sortColumn.order === 'asc') return <FontAwesomeIcon icon={ faSortUp } />
        return <FontAwesomeIcon icon={ faSortDown } />
    }

    return <div className='columns row fs-2 fw-bold text-white' style={{ letterSpacing: '0.1em' }}>
        <div onClick={ () => raiseSort('title') } className={ 'ps-4 text-hover-primary cursorPointer' }>
            TASK{ renderSortIcon('title') }
        </div>
        <div onClick={ () => raiseSort('description') } className={ `${styles.descriptionCol} cursorPointer` }>
            DESCRIPTION{ renderSortIcon('description') }
        </div>
        <div onClick={ () => raiseSort('type.name') } className={ 'cursorPointer' }>
            TYPE{ renderSortIcon('type.name') }
        </div>
        <div className={ `${styles.completeCol}` }></div>
    </div>
}
 
export default TableHeader;