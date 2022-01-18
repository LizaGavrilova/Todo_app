import React, { Component } from "react";

import Header from "../Header/header";
import TaskList from "../TaskList/taskList";
import Footer from "../Footer/footer";

import './app.css';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            todoData: [
                {id: 1, label: 'Completed task'},
                {id: 2, label: 'Editing task'},
                {id: 3, label: 'Active task'}
            ]
        };

        this.deleteItem = (id) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
                return {
                    todoData: newArray
                };
            });
        };
    }

    render() {
        return (
            <div className="todoapp">
                <Header />
                <section className="main">
                    <TaskList todos={this.state.todoData}
                              onDeleted={this.deleteItem} />
                    <Footer />
                </section>
            </div>
        );
    }    
}

