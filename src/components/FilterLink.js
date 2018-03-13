import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/currentFilter';

const styles = {
  link: { 
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer',
  }
}

const FilterLink = ({ 
  filter, 
  dispatch, 
  children 
}) => {
  if (children === filter) {
    return <span>{children}</span>
  } else {
    return (
      <span
        style={styles.link}
        onClick={ () => dispatch(setFilter(children))}
      >
        {children}
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return { filter: state.currentFilter }
}

export default connect(mapStateToProps)(FilterLink)
