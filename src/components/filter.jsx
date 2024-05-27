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

    return (
        <ul className="list-group">
            <li className='list-group-item fs-5 fw-bold'>Filter by type</li>
            { items.map((item, index) => (
                <li 
                    onClick={ () => onItemSelect(item) } 
                    key={ item[valueProperty] } 
                    className={` ${isActive(item, index) === true 
                        ? 'list-group-item '
                        : 'list-group-item'
                    }
                        cursorPointer fs-5
                    `}
                >
                    {isActive(item, index) && <FontAwesomeIcon icon={faCircle} style={{ color: '#0d6efd' }} />} { item[textProperty] }
                </li>
            ))}
        </ul>
    )
};

Filter.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default Filter;