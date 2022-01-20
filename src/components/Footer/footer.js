import React from 'react';

import TasksFilter from '../TasksFilter/tasksFilter';
import './footer.css';

const Footer = ({toDo}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{toDo} items left</span>

            <TasksFilter />
            <button className="clear-completed">Clear completed</button>                 
        </footer>
    );
};

export default Footer;