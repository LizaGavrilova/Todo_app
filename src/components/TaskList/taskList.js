import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Task from '../Task/Task';
import './TaskList.css';

// eslint-disable-next-line react/prefer-stateless-function
class TaskList extends Component {
  static defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleDone: () => {},
    onToggleEdit: () => {},
    onToggleLabel: () => {}
  };

  static propTypes = {
    todos: PropTypes.instanceOf(Array),
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    onToggleLabel: PropTypes.func
  };

  render() {
    const { todos, onDeleted, onToggleDone, onToggleEdit, onToggleLabel } = this.props;

    const elements = todos.map((item) => {
      const timeAfterCreate = formatDistanceToNow(new Date(item.dateCreate), { includeSeconds: true });

      return (
        <Task
          key={item.id}
          id={item.id}
          label={item.label}
          done={item.done}
          editing={item.editing}
          onDeleted={() => onDeleted(item.id)}
          onToggleDone={() => onToggleDone(item.id)}
          timeAfterCreate={timeAfterCreate}
          onToggleEdit={() => onToggleEdit(item.id)}
          onToggleLabel={onToggleLabel}
        />

      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}

export default TaskList;
