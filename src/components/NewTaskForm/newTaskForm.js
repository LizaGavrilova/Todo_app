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
        const {onItemAdded} = this.props;
        const {label} = this.state;
        onItemAdded(label);
        this.setState({
            label: ""
        });
    };

    render() {
        const {label} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text'
                    className="new-todo"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done?"
                    value={label}
                    autoFocus />
            </form>
        );
    }
}
