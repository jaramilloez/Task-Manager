import React, { Component } from 'react';
import styles from '../utility/commonStyles';

class TableBody extends Component { 
    render() { 
        const { data, onDelete } = this.props;
        return (
            <div>
                { data.map(item => (
                    <div 
                    className='row rounded-4 bg-light shadow-sm fs-5 my-2 d-flex align-items-center row-hover' 
                    key={ item._id }
                    >
                        <div className={ `${styles.taskCol} ps-4` }>
                            { item.title }
                        </div>
                        <div className={ `${styles.descriptionCol} ${styles.taskCell}` }>
                            { item.description }
                        </div>
                        <div className={ `${styles.typeCol} ${styles.taskCell} py-2 border-start border-2` }>
                            { item.type.name }
                        </div>
                        <div className={ `${styles.completeCol} ${styles.taskCell} d-flex align-items-center justify-content-center` }>
                            <button 
                                type='button' 
                                className='btn btn-outline-success'
                                onClick={ () => onDelete(item._id) }
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
}
 
export default TableBody;