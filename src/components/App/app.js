import React, { Component } from "react";

import Header from "../Header/header";
import TaskList from "../TaskList/taskList";
import Footer from "../Footer/footer";

import './app.css';

export default class App extends Component {

    constructor() {
        super();

        this.maxId = 100;

        this.createTodoItem = (label) => {
            return {
                id: this.maxId++,
                label: label,
                done: false
            }
        }

        this.state = {
            todoData: [
                this.createTodoItem('Completed task'),
                this.createTodoItem('Editing task'),
                this.createTodoItem('Active task')
            ],
            filter: 'all'
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

        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);

            this.setState(({todoData}) => {
                const newArr = [...todoData, newItem];
                return {
                    todoData: newArr
                }
            });
        };

        this.toggleProperty = (arr, id, propName) => {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            return [...arr.slice(0, idx),
                    newItem,
                    ...arr.slice(idx + 1)];
        };

        this.onToggleDone = (id) => {
            this.setState(({todoData}) => {
                return {
                    todoData: this.toggleProperty(todoData, id, 'done')
                };
            });
        };

        this.onFilterChange = (filter) => {
            this.setState({filter});
        };

        this.onSearchChange = (search) => {
            this.setState({search});
        };

        this.filterItems = (items, filter) => {
            if (filter === 'all') {
                return items;
            } else if (filter === 'active') {
                return items.filter((item) => !item.done)
            } else if (filter === 'done') {
                return items.filter((item) => item.done)
            }
        };

        this.onDeleteCompleted = () => {           ; 
            this.setState(({todoData}) => {
                const items = [...todoData.slice(0)];
                const newArr = items.filter((item) => !item.done);
                return {
                    todoData: newArr
                }
            });
        };
    }

    render() {
        const {todoData, filter} = this.state;
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        const visibleItems = this.filterItems(todoData, filter);

        return (
            <div className="todoapp">
                <Header onItemAdded={this.addItem} />
                <section className="main">
                    <TaskList todos={visibleItems}
                              onDeleted={this.deleteItem}
                              onToggleDone={this.onToggleDone} />
                    <Footer toDo={todoCount}
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                            onDeleteCompleted={this.onDeleteCompleted} />
                </section>
            </div>
        );
    }    
}

