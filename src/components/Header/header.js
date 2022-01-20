import React, { Component } from "react";

import '../Header/header.css';
import NewTaskForm from "../NewTaskForm/newTaskForm";

class Header extends Component {
    render() {
        const {onItemAdded} = this.props;

        return (
            <div className="header">
                <h1>todos</h1>
                <NewTaskForm onItemAdded={onItemAdded} />
            </div>
        );
    }
}

export default Header;