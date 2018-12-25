import React, { Component } from 'react';

class AddTotdo extends Component {
    state = { 
        content: ''
     }
    
handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' });
}

handleChange = (e) => {
    this.setState ({
        content: e.target.value
    });
}

    render() { 
        return ( 
            <div>
                <form className='container' onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Content</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}

export default AddTotdo;