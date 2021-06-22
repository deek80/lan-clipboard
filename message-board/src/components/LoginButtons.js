import React from "react";
import {Button} from "@material-ui/core";
import {
  useAuth,
  signInWithGoogle,
  signInWithGoogleReselect,
  signOut,
} from "../services/firebase";

const menuButton = (text, action) => (
  <Button color="inherit" onClick={action}>
    {text}
  </Button>
);

const LoginButtons = () => {
  const user = useAuth();
  if (user === null) {
    return menuButton("Sign In", signInWithGoogle);
  }

  return (
    <>
      {menuButton("Switch User", signInWithGoogleReselect)}
      {menuButton("Sign Out", signOut)}
    </>
  );
};

export default LoginButtons;
