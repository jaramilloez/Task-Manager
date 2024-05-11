import React from 'react';

const ListGroup = props => {
    const { items } = props;

    return <ul class="list-group list-group-horizontal d-flex justify-content-end m-1">
        { items.map(item => (
            <li className='list-group-item' key={ item._id }>
                { item }
            </li>
        ))}
  </ul>;
}

export default ListGroup;