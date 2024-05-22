import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Filter = props => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    activeFilter = item => {
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
                    className={` ${selectedItem == null 
                        ? index === 0
                            ? 'list-group-item active'
                            : 'list-group-item'
                        : item === selectedItem 
                            ? 'list-group-item active' 
                            : 'list-group-item' 
                    }
                        cursorPointer
                    `}
                >
                    { item[textProperty] }
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