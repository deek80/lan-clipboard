import React, {useState} from "react";
import {Box, Button, makeStyles, Snackbar, TextField} from "@material-ui/core";
import {GetApp as DownArrow, Publish as UpArrow} from "@material-ui/icons";
import AppBar from "./components/AppBar";
import {useData} from "./firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gapLeft: {
    marginLeft: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [localText, setLocalText] = useState("");

  const [serverText, serverError, serverTextRef] = useData(
    user => `users/${user.uid}/private/clipboard`
  );

  const handleLocalTextChange = e => {
    setLocalText(e.target.value);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  const toast = text => {
    setToastMessage(text);
    setShowToast(true);
  };

  const _copyListener = e => {
    document.removeEventListener("copy", _copyListener, true);
    e.preventDefault();
    e.clipboardData.clearData();
    e.clipboardData.setData("text/plain", serverText);
  };

  const handleCopy = () => {
    document.addEventListener("copy", _copyListener, true);
    document.execCommand("copy");
    toast("Copied!");
  };

  const handleSend = () => {
    serverTextRef
      .set(localText)
      .then(() => {
        toast("Sent!");
      })
      .catch(() => {
        toast("Failed to Send :(");
      });
  };

  return (
    <>
      <AppBar />
      <div className={classes.root}>
        <Box p={1} display="flex" flexDirection="row" flexWrap="nowrap">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopy}
            startIcon={<DownArrow />}
          >
            Copy
          </Button>
          <TextField
            className={classes.gapLeft}
            label="Remote clipboard"
            value={serverText || (serverError ? "Error fetching text" : "")}
            fullWidth
            inputProps={{readOnly: true}}
          />
        </Box>
        <Box p={1} display="flex" flexDirection="row" flexWrap="nowrap">
          <TextField
            label="Paste here to update"
            value={localText}
            onChange={handleLocalTextChange}
            fullWidth
          />
          <Button
            className={classes.gapLeft}
            variant="contained"
            color="primary"
            onClick={handleSend}
            endIcon={<UpArrow />}
            disabled={localText === ""}
          >
            Send
          </Button>
        </Box>
        <Snackbar
          open={showToast}
          autoHideDuration={2000}
          onClose={hideToast}
          message={toastMessage}
        />
      </div>
    </>
  );
};

export default App;
