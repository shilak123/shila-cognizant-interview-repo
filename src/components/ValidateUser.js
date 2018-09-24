import React from "react";

import Typography from "@material-ui/core/Typography";

/**
 * To show message if user is not found
 * @author Shila Kumari
 */
const ValidateUser = () => (
  <div className="user-details">
    <Typography
      variant="headline"
      component="h2"
      align="center"
      className="user-blank"
    >
      No user Found
    </Typography>
  </div>
);

export default ValidateUser;