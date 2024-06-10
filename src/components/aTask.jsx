import React from 'react';
import Form from './common/form'

class ATask extends Form {
    schema = {
        
    }

    handleSave = () => {
        this.props.history.replace('/')
    }

    render() { 
        return <div className="container" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <div className='fs-2 fw-bold'>
                {this.props.match.params.title}
            </div>
            <form>
                { this.renderButton('Save')}
            </form>
        </div>
    }
}
 
export default ATask;