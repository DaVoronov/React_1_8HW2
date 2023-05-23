import { Alert } from "@mui/material";

function Notification({ message }) {
  return <Alert severity="error">{message}</Alert>;
}

export default Notification;
