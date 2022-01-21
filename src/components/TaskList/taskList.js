import React, { Component } from 'react';
import { formatDistanceToNow } from "date-fns";

import Task from '../Task/task';
import './taskList.css';

class TaskList extends Component {
  render() {
    const {todos, onDeleted, onToggleDone} = this.props;

    const elements = todos.map( (item) => {
      const timeAfterCreate = formatDistanceToNow(new Date(item.dateCreate), {includeSeconds: true});

      return (
        <Task
          key={item.id}
          label={item.label}
          done={item.done}
          onDeleted={ () => onDeleted(item.id)}
          onToggleDone={ () => onToggleDone(item.id)}
          timeAfterCreate={timeAfterCreate} />
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