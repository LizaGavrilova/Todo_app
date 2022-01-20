import React, { Component } from 'react';

import Task from '../Task/task';
import './taskList.css';

class TaskList extends Component {
  render() {
    const {todos, onDeleted, onToggleDone} = this.props;

    const elements = todos.map( (item) => {
      return (
        <Task
          key={item.id}
          label={item.label}
          done={item.done}
          onDeleted={ () => onDeleted(item.id)}
          onToggleDone={ () => onToggleDone(item.id)} />
      );
    });

    return (
      <ul className="todo-list">
        { elements }
      </ul>
    );
  }
}

export default TaskList;