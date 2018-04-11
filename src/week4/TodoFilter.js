import React from 'react';
import PropTypes from 'prop-types';

export default function TodoFilter({ text, currentFilter, onFilterChange}) {

  var selected = text === currentFilter ? 'selected ' : '';

  return (
    <a className={selected}
      href="#/"
      onClick={() => onFilterChange(text)}>{text}</a>
  )
}

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  text: PropTypes.string.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

