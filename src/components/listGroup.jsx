import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return (
        <ul className="list-group">
            <li className='list-group-item fs-5 fw-bold'>Filter by type</li>
            { items.map((item, index) => (
                <li 
                    onClick={ () => onItemSelect(item) } 
                    key={ item[valueProperty] } 
                    className={ selectedItem == null 
                        ? index === 0
                            ? 'list-group-item active'
                            : 'list-group-item'
                        : item === selectedItem 
                            ? 'list-group-item active' 
                            : 'list-group-item' 
                    }
                >
                    { item[textProperty] }
                </li>
            ))}
        </ul>
    )
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default ListGroup;