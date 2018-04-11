import React from "react";
import PropTypes from 'prop-types';
import TodoFilter from "./TodoFilter";

const taskFilters = [ 'all', 'active', 'completed' ];

export default function TodoFooter({ leftTodos, currentFilter, onFilterChange}) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{leftTodos}</strong> item left</span>
      <ul className="filters">
        {
         taskFilters.map( filter =>
           <li key={filter}>
             <TodoFilter
               text={filter}
               currentFilter={currentFilter}
               onFilterChange={onFilterChange}/>
           </li>
         )
        }
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

TodoFooter.propTypes = {
  leftTodos: PropTypes.number.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};
