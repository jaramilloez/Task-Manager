import React from 'react';
import { Link } from 'react-router-dom'
import { getCurrentUser } from './../../services/authService';
import styles from '../../utility/commonStyles';

const TableBody = ({ data, onDelete}) => { 
    return <div>
        { data.map(item => (
            <Link 
                className='taskCell columns row fs-5 my-2 align-items-center text-white text-decoration-none rounded-4' 
                key={ item._id }
                to={ `/tasks/${item._id}` }
            >
                    <div className={ 'ps-4' }>
                        { item.title }
                    </div>
                    <div className={ `${styles.taskCell} d-none d-lg-block ` }>
                        { item.description }
                    </div>
                    <div className={ `${styles.taskCell} py-2 border-start border-2` }>
                        { item.type.name }
                    </div>
                    { getCurrentUser() && <div className={ `${styles.taskCell} d-flex align-items-center justify-content-center` }>
                        <button 
                            type='button' 
                            className='btn btn-outline-success px-2 completeBtn'
                            onClick={ e => {
                                onDelete(item._id); 
                                e.preventDefault();
                            }}
                        >
                            Complete
                        </button>
                    </div> }
            </Link>
        ))}
    </div>
}
 
export default TableBody;