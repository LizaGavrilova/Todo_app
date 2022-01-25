import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/tasksFilter';
import './footer.css';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  static defaultProps = {
    toDo: 0,
    filter: 'all',
    onFilterChange: () => {},
    onDeleteCompleted: () => {},
  };

  static propTypes = {
    toDo: PropTypes.number,
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
    onDeleteCompleted: PropTypes.func,
  };

  render() {
    const { toDo, filter, onFilterChange, onDeleteCompleted } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{toDo} items left</span>

        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" type="button" onClick={() => onDeleteCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
