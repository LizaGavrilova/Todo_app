import React, { Component } from "react";

import './task.css';

class Task extends Component {

    render() {
        const { label, done, onDeleted, onToggleDone } = this.props;

        let classNames = 'item';
        if(done) {
            classNames += ' completed';
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           onClick={onToggleDone} />
                    <label>
                        <span className="description">{ label }</span>
                        {/* <span className="created">created 17 seconds ago</span> */}
                    </label>  
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"
                            onClick={onDeleted} >
                    </button>          
                </div>
                <input type="text" class="edit" value="Editing task"></input>
            </li>
        );
    }
}


export default Task;
