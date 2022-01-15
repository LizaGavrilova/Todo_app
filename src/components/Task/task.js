import React from "react";

import './task.css';

const Task = ({label}) => {
    return (
        <div>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{ label }</span>
                    {/* <span className="created">created 17 seconds ago</span> */}
                </label>  
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>          
            </div>
            <input type="text" class="edit" value="Editing task"></input>
        </div>
    );
};

export default Task;
