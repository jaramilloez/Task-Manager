import React, { Component } from 'react';

class ATask extends Component {
    handleSave = () => {
        this.props.history.replace('/')
    }
    render() { 
        return <div className="container">
            <div>
                {this.props.match.params.title}
            </div>
            <button onClick={this.handleSave}>Save</button>
        </div>
    }
}
 
export default ATask;