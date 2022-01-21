import React, { Component } from 'react';

import './tasksFilter.css';

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Completed' }
];

class TasksFilter extends Component {
    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = filterButtons.map(({name, label}) => {
            const isActive = name === filter;
            const classNames = isActive ? 'selected' : 'button';

            return (
                <li key={name}>
                    <button type='button'
                            onClick={() => onFilterChange(name)}
                            className={classNames}>{label}
                    </button>
                </li>
            );
        });


        return (
            <ul className="filters">
                {buttons}
            </ul>        
        );
    }
}

export default TasksFilter;


