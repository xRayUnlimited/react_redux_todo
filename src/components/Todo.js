import React from 'react';
import { connect } from 'react-redux';

const styles = {
  complete: { 
    textDecoration: 'line-through', 
    color: 'green',
  }
}

const Todo = ({ 
  id, 
  name, 
  complete, 
  dispatch 
}) => (
  <li
    style={ complete ? styles.complete : {} }
    onClick={ () => dispatch({ type: 'TOGGLE_TODO', id }) }
  >
    {name}
  </li>
)

export default connect()(Todo)