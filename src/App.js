import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.status}>
		  	<div className="view">
		  		<input className="toggle" type="checkbox" />
		  		<label>{this.props.label}</label>
		  		<button className="destroy"></button>
		  	</div>
		  </li>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map( todo => <TodoItem label={todo.label} status={todo.status} /> )}
      </ul>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <header className="header">
				  <h1>todos</h1>
				  <input className="new-todo" placeholder="What needs to be done?" autofocus />
			  </header>
			<section className="main">
        <TodoList todos={[
          {
            label: "Taste Javascript",
            status: "completed"
          },
          {
            label: "Eat a pancake",
          }
        ]} />
			</section>
			<footer className="footer">
				<span className="todo-count"><strong>0</strong> item(s) left</span>
				<button className="clear-completed">Clear completed</button>
			</footer>
      </div>
    );
  }
}

export default App;
