import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../../utility/commonStyles';

class TableHeader extends Component { 
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
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
        this.props.onSort(sortColumn)
    }

    renderSortIcon = path => {
        const sortColumn = { ...this.props.sortColumn };

        if (sortColumn.path !== path) return null;

        if (sortColumn.order === 'asc') return <FontAwesomeIcon icon={ faSortUp } />
        
        return <FontAwesomeIcon icon={ faSortDown } />
    }

    render() { 
        return <div className='row fs-2 fw-bold' style={{ letterSpacing: '0.1em' }}>
            <div onClick={ () => this.raiseSort('title') } className={ `${styles.taskCol} ps-4 text-hover-primary cursorPointer` }>
                TASK{ this.renderSortIcon('title') }
            </div>
            <div onClick={ () => this.raiseSort('description') } className={ `${styles.descriptionCol} cursorPointer` }>
                DESCRIPTION{ this.renderSortIcon('description') }
            </div>
            <div onClick={ () => this.raiseSort('type.name') } className={ `${styles.typeCol} cursorPointer` }>
                TYPE{ this.renderSortIcon('type.name') }
            </div>
            <div className={ `${styles.completeCol}` }></div>
        </div>
    }
}
 
export default TableHeader;