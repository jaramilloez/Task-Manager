import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Filter = props => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    const isActive = (item, index) => {
        if(selectedItem == null){
            if(index === 0) return true;
            else return false
        }else{
            if(item === selectedItem) return true;
            else return false;
        }
    }

    return <ul className="pe-0 list-group">
        <li className='list-group-item fs-5 fw-bold pe-3'>Filter by type</li>
        { items.map((item, index) => (
            <li 
                onClick={ () => onItemSelect(item) } 
                key={ item[valueProperty] } 
                className={'list-group-item cursorPointer'}
            >
                {isActive(item, index) && <FontAwesomeIcon icon={faCircle} style={{ color: '#0d6efd' }} />} { item[textProperty] }
            </li>
        ))}
    </ul>
};

Filter.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default Filter;