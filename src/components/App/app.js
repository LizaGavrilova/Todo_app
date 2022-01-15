import React from "react";

import Header from "../Header/header";
import TaskList from "../TaskList/taskList";
import Footer from "../Footer/footer";

import './app.css';

const App = () => {

    const todoData = [
        {id: 1, label: 'Completed task'},
        {id: 2, label: 'Editing task'},
        {id: 3, label: 'Active task'}
    ];

    return (
        <div className="todoapp">
            <Header />
            <section className="main">
                <TaskList todos={todoData} />
                <Footer />
            </section>
        </div>
    );
}

export default App;
