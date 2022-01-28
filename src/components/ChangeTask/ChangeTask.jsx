import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ChangeTask.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class ChangeTask extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    newLabel: this.props.label,
  };

  static defaultProps = {
    label: '',
    onToggleLabel: () => {},
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    onToggleLabel: PropTypes.func,
  };

  onLabelChange = (evt) => {
    this.setState({
      newLabel: evt.target.value,
    });
  };

  onKeyPress = (evt) => {
    const { id, onToggleLabel } = this.props;
    const { newLabel } = this.state;
    if (evt.key === 'Enter') {
      onToggleLabel(id, newLabel);
    }
  };

  render() {
    const { newLabel } = this.state;
    return (
      <label>
        <input
          type="text"
          className="edit"
          value={newLabel}
          onChange={this.onLabelChange}
          onKeyPress={this.onKeyPress}
          autoFocus
        />
      </label>      
    );
  }
}
