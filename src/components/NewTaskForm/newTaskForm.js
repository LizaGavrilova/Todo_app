import React from "react";

import './newTaskForm.css';

const NewTaskForm = () => {
    return (
        <input className="new-todo"
                placeholder="What needs to be done?"
                autofocus />
    );
};

export default NewTaskForm;