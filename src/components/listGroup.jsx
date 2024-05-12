import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty } = props;

    return <ul className="list-group list-group-horizontal d-flex justify-content-end m-1">
        { items.map(item => (
            <li className='list-group-item' key={ item[valueProperty] }>
                { item[textProperty] }
            </li>
        ))}
  </ul>;
}

export default ListGroup;