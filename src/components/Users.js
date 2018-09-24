import PropTypes from "prop-types";
import React from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import User from "./User.js";
import ValidateUser from "./ValidateUser.js";

/**
 * To list user component and render message on the basis of current state
 * @author Shila Kumari
 */
export default class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        last_name: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const { users } = this.props;

    return (
      <div elevation={1}>
        {(users.length === 0 && <ValidateUser />) || (
          <TransitionGroup className="user-details">
            {users.map((user, index) => (
              <CSSTransition key={user.id} timeout={250} classNames="fade">
                <User {...user}>{user.first_name}</User>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </div>
    );
  }
}
