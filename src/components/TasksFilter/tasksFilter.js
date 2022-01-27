import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Completed' },
];

// eslint-disable-next-line react/prefer-stateless-function
class TasksFilter extends Component {
  static defaultProps = {
    filter: 'all',
    onFilterChange: () => {},
  };

  static propTypes = {
    filter: PropTypes.string,
    onFilterChange: PropTypes.func,
  };

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = filterButtons.map(({ name, label }) => {
      const isActive = name === filter;
      const classNames = isActive ? 'selected' : 'button';

      return (
        <li key={name}>
          <button type="button" onClick={() => onFilterChange(name)} className={classNames}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}

export default TasksFilter;
