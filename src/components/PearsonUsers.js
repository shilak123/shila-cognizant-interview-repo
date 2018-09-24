import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";


import { getUsers, removeDuplicates } from "../actions";
import Users from "./Users.js";
/**
 * To get the Heading and Component for Users List
 * @author Shila Kumari
 */
export class PearsonUsers extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        first_name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        last_name: PropTypes.string.isRequired
      })
    ).isRequired,
    getUsers: PropTypes.func.isRequired,
    removeDuplicates: PropTypes.func.isRequired
  };
 
 /**
 * To get the all Users using props 
 * @author Shila Kumari
 */
  componentWillMount() {
    this.props.getUsers();
  }
  
/**
 * It will duplicate users from User List
 * @author Shila Kumari
 */
  componentDidUpdate() {
    this.props.removeDuplicates();
  }

  render() {
    const { users } = this.props;

    return (
      <div className="pearson-users">
        <p className="heading">Pearson User Management</p>
        <Users users={users} />
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.Users.users
  }),

  dispatch => ({
    getUsers: () => dispatch(getUsers()),
    removeDuplicates: () => dispatch(removeDuplicates())
  })
)(PearsonUsers);
