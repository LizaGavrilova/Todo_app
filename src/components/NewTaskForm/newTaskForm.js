import React, { Component } from "react";

import './newTaskForm.css';

export default class NewTaskForm extends Component {

    state = {
        label: ""
    };

    onLabelChange = (evt) => {
        this.setState({
            label: evt.target.value
        });
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        console.log('add');
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text'
                    className="new-todo"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={this.state.label}
                    autofocus />
            </form>
        );
    }
}
