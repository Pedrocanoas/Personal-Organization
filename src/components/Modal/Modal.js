import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./modal.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    minWidth: 25,
    minHeight: 25,
  },
}));

const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  const classes = useStyles();
  const handleOutsideClick = (e) => {
    if (e.target.id == id) onClose();
  };
  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="close">
          <CancelIcon className={classes.small} onClick={onClose} />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
