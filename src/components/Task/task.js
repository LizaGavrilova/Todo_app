import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChangeTask from '../ChangeTask/ChangeTask';

import './Task.css';

// eslint-disable-next-line react/prefer-stateless-function
class Task extends Component {
  static defaultProps = {
    label: 'Не задано',
    done: false,
    editing: false,
    onDeleted: () => {},
    onToggleDone: () => {},
    onToggleEdit: () => {},
    onToggleLabel: () => {},
    timeAfterCreate: '—',
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    done: PropTypes.bool,
    editing: PropTypes.bool,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    onToggleEdit: PropTypes.func,
    onToggleLabel: PropTypes.func,
    timeAfterCreate: PropTypes.string,
  };

  render() {
    const { id, label, done, editing, onDeleted, onToggleDone, timeAfterCreate, onToggleEdit, onToggleLabel } =
      this.props;

    let classNames;
    if (done) {
      classNames = 'completed';
    }
    if (editing) {
      classNames = 'editing';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} checked={done} readOnly />
          <label>
            <span className="description" onClick={onToggleDone} onKeyPress={onToggleDone} role="presentation">
              {label}
            </span>
            <span className="created">created {timeAfterCreate} ago</span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Edit" onClick={onToggleEdit} />
          <button className="icon icon-destroy" type="button" aria-label="Destroy" onClick={onDeleted} />
        </div>
        {editing ? <ChangeTask id={id} label={label} onToggleLabel={onToggleLabel} /> : null}
      </li>
    );
  }
}

export default Task;
