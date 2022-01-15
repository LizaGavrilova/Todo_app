import React from 'react';

import Task from '../Task/task';
import './taskList.css';

const TaskList = ({ todos }) => {
    const elements = todos.map( (item) => {
      return (
        <li key={item.id}>
          <Task
            label={item.label} />
        </li>
      );
    });

    return (
      <ul className="todo-list">
        { elements }
      </ul>
    );
};

export default TaskList;