import React, { Component } from 'react';

class ATask extends Component {
    handleSave = () => {
        this.props.history.replace('/')
    }
    render() { 
        return <div className="container">
            <div className='fs-2 fw-bold'>
                {this.props.match.params.title}
            </div>
            <button className='btn btn-primary' onClick={this.handleSave}>Save</button>
        </div>
    }
}
 
export default ATask;