import React, { Component } from 'react';

import Task from '../Task/task';
import './taskList.css';

class TaskList extends Component {
  render() {
    const {todos, onDeleted} = this.props;

    const elements = todos.map( (item) => {
      return (
        <Task
          key={item.id}
          label={item.label}
          onDeleted={ () => onDeleted(item.id)} />
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