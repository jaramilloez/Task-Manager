import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../../utility/commonStyles';

const TableBody = ({ data, onDelete}) => { 
    return <div>
        { data.map(item => (
            <Link 
                className='row fs-5 my-2 d-flex align-items-center text-white text-decoration-none row rounded-4 taskCell' 
                key={ item._id }
                to={ `/tasks/${item._id}` }
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
                            className='btn btn-outline-success px-2'
                            onClick={ e => {
                                onDelete(item._id); 
                                e.preventDefault();
                            }}
                        >
                            Complete
                        </button>
                    </div>
            </Link>
        ))}
    </div>
}
 
export default TableBody;