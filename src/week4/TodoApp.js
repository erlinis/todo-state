import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import data from "./todoData";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data || [],
      currentFilter: 'all'
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filteredTodos = this.filteredTodos.bind(this);
  }

  addTodo(todo) {
    this.setState(state => ({ todos: state.todos.concat([todo]) }));
  }

  toggleTodoDone(idx) {
    var { todos } = this.state;
    var todo = todos[idx];
    var newTodos = [
      ...todos.slice(0, idx),
      Object.assign({}, todo, { isDone: !todo.isDone }),
      ...todos.slice(idx + 1)
    ];
    this.setState(state => ({ todos: newTodos })); // updated function
  }

  deleteTodo(idx) {
    var todos = this.state.todos;
    var newTodos = todos.filter((todo, todoIdx) => {
      return todoIdx !== idx;
    });
    this.setState(state => ({ todos: newTodos }));
  }

  onFilterChange(currentFilter) {
    this.setState(state => ({ currentFilter}));
  }

  filteredTodos() {
    var todos = this.state.todos;
    var filtered = [];
    switch(this.state.currentFilter) {
      case 'active':
        filtered = todos.filter(todo => !todo.isDone);
        break;
      case 'completed':
        filtered = todos.filter(todo => todo.isDone);
        break;
      default:
        filtered = todos;
        break;
    }
    return filtered;
  }

  render() {
    var { todos } = this.state;
    var leftTodos = todos.filter(todo => !todo.isDone).length;
    return (
      <section className="todoapp">
        <TodoHeader onAddTodo={this.addTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <TodoList
            deleteTodo={this.deleteTodo}
            toggleTodoDone={this.toggleTodoDone}
            list={this.filteredTodos()}
          />
        </section>
        <TodoFooter
          leftTodos={leftTodos}
          currentFilter={this.state.currentFilter}
          onFilterChange={this.onFilterChange}
        />
      </section>
    );
  }
}
