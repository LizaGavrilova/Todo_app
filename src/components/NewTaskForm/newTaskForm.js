import React, { Component } from "react";
import PropTypes from 'prop-types';

import './newTaskForm.css';

export default class NewTaskForm extends Component {

    static defaultProps = {
        onItemAdded: () => {}
    };

    static propTypes = {
        onItemAdded: PropTypes.func
    };

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
                    autoFocus />
            </form>
        );
    }
}
