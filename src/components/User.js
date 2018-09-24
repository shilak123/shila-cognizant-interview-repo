import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { deleteUser } from "../actions";

/**
 *  To render various fields of users in UI
 *  @author Shila Kumari
 */
export class User extends React.Component {
  static propTypes = {
    deleteUser: PropTypes.func.isRequired,
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    last_name: PropTypes.string.isRequired
  };

  deleteUser = event => {
    const { id, deleteUser } = this.props;

    deleteUser(id);
  };

  render() {
    const user = this.props;

    return (
      <Card className="user-card">
        <CardMedia className="user-avatar" image={user.avatar} />

        <CardContent className="user-content">
          <Typography
            variant="headline"
            component="h2"
            align="center"
            className="user-title"
          >
            {user.first_name} {user.last_name}
          </Typography>
        </CardContent>

        <div className="user-action">
          <Button
            size="medium"
            className="delete-user"
            onClick={this.deleteUser}
            variant="text"
          >
            Delete
          </Button>
        </div>
      </Card>
    );
  }
};

export default connect(
  null,

  dispatch => ({
    deleteUser: (id) => dispatch(deleteUser(id))
  })
)(User);
