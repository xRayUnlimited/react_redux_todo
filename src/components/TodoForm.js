import React from 'react';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  state = { name: ''}

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    const { name } = this.state;
    //Magic
    this.setState({ name: '' })
  }
  render() {
    const { name } = this.state;

    return (
      <div> 
        <h3>Add a Todo</h3>
        <form onSubmit={this.handleSubmit}>
        <input value={name}
        onChange={this.handleChange}
        required />
        </form>
    )
  }
  }
 


export default TodoForm;