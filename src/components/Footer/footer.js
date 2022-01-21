import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/tasksFilter';
import './footer.css';

class Footer extends Component {
    static defaultProps = {
        toDo: 0,
        onFilterChange: () => {},
        onDeleteCompleted: () => {}
    };

    static propTypes = {
        toDo: PropTypes.number,
        onFilterChange: PropTypes.func,
        onDeleteCompleted: PropTypes.func
    };

    render() {
        const {toDo, filter, onFilterChange, onDeleteCompleted} = this.props;

        return (
            <footer className="footer">
                <span className="todo-count">{toDo} items left</span>
    
                <TasksFilter filter={filter}
                            onFilterChange={onFilterChange} />
                <button className="clear-completed"
                        onClick={() => onDeleteCompleted()}>Clear completed</button>                 
            </footer>
        );

    }''
}
export default Footer;