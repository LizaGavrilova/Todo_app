import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import NewTaskForm from '../NewTaskForm';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };

  render() {
    const { onItemAdded } = this.props;

    return (
      <div className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={onItemAdded} />
      </div>
    );
  }
}

export default Header;
