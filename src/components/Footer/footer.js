import React, { Component } from 'react';

import TasksFilter from '../TasksFilter/tasksFilter';
import './footer.css';

class Footer extends Component {
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