import React, { Component } from "react";

import './task.css';

class Task extends Component {
    constructor() {
        super();
    
        this.state = {
          done: false
        };
    
        this.onCheckboxClick = () => {
          this.setState((state) => {
            return {
                done: !state.done
            };
          });
        }
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done } = this.state;

        let classNames = 'item';
        if(done) {
            classNames += ' completed';
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           onClick={this.onCheckboxClick} />
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
