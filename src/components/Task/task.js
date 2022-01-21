import React, { Component } from "react";
import PropTypes from 'prop-types';

import './task.css';

class Task extends Component {

    static defaultProps = {
        label: 'Не задано',
        done: false,
        onDeleted: () => {},
        onToggleDone: () => {},
        timeAfterCreate: "—"
    };

    static propTypes = {
        label: PropTypes.string,
        done: PropTypes.bool,
        onDeleted: PropTypes.func,
        onToggleDone: PropTypes.func,
        timeAfterCreate: PropTypes.string
    };    

    render() {
        const { label, done, onDeleted, onToggleDone, timeAfterCreate } = this.props;

        let classNames = 'item';
        if(done) {
            classNames += ' completed';
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           onClick={onToggleDone}
                           defaultChecked={done} />
                    <label>
                        <span className="description">{ label }</span>
                        <span className="created">created {timeAfterCreate} ago</span>
                    </label>  
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"
                            onClick={onDeleted} >
                    </button>          
                </div>
                {/* <input type="text" className="edit" value="Editing task"></input> */}
            </li>
        );
    }
}


export default Task;
