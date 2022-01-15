import React from "react";

import '../Header/header.css';
import NewTaskForm from "../NewTaskForm/newTaskForm";

const Header = () => {
    return (
        <div className="header">
            <h1>todos</h1>
            <NewTaskForm />
        </div>
    );
};

export default Header;