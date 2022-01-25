import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from "date-fns";

import Task from '../Task/task';
import './taskList.css';

// eslint-disable-next-line react/prefer-stateless-function
class TaskList extends Component {
  static defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleDone: () => {}
};

  static propTypes = {
      todos: PropTypes.instanceOf(Array),
      onDeleted: PropTypes.func,
      onToggleDone: PropTypes.func
  };

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