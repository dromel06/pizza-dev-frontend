import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({
  message,
  type,
  onClose,
  notificationDuration = 3000,
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={notificationDuration}
      onClose={handleClose}
    >
      <Alert
        severity={type}
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiAlert-message": {
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Typography component="span">{message}</Typography>
        <IconButton aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Alert>
    </Snackbar>
  );
  // valids types =
  //  - error
  //  - warning
  //  - info
  //  - success
}
