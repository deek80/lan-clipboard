import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LoginButtons from "./LoginButtons";
import {useAuth} from "@deek80/firebase-hooks";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
});

const AppBar = () => {
  const classes = useStyles();
  const user = useAuth();

  return (
    <div className={classes.grow}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography className={classes.grow}>
            {user ? `Signed in as ${user.email}` : "Not signed in"}
          </Typography>
          <LoginButtons />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
