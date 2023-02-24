import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormHelperText,
  Snackbar,
  IconButton,
  Alert
} from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function NewTodoButton(props) {
  const [dialog, SetDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [snackAlert, setSnackAlert] = useState(false);

  function handleAddTodo() {
    SetDialog(true);
  }
  function handleClose() {
    SetDialog(false);
    clearTextField();
    setErrorTitle(false);
    setErrorDescription(false);
  }

  function handleSnackbarClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackAlert(false);
  }

  function showData() {
    if (title.length === 0 && description.length === 0) {
      setErrorTitle(true);
      setErrorDescription(true);
      return;
    } else if (title.length === 0) {
      setErrorTitle(true);
      return;
    } else if (description.length === 0) {
      setErrorDescription(true);
      return;
    } else {
      SetDialog(false);
      clearTextField();
      props.displayTodo(title, description);
      setSnackAlert(true);
    }
  }

  function clearTextField() {
    setTitle("");
    SetDescription("");
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "10px",
          justifyContent: "center"
        }}
      >
        <Button
          sx={{
            justifyItems: "baseline"
          }}
          variant="contained"
          color="error"
          endIcon={<AddCardIcon />}
          onClick={handleAddTodo}
        >
          Add new Todo
        </Button>
      </Box>
      <Dialog
        open={dialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add New Todo</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>

          <TextField
            autoFocus
            label="Todo Title"
            fullWidth
            variant="standard"
            required
            error={errorTitle}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrorTitle(false);
            }}
          />
          <TextField
            label="Todo Description"
            fullWidth
            variant="standard"
            required
            multiline
            rows={3}
            error={errorDescription}
            value={description}
            onChange={(e) => {
              SetDescription(e.target.value);
              setErrorDescription(false);
            }}
          />
          {errorDescription && errorTitle ? (
            <FormHelperText error={true}>
              Enter title and description
            </FormHelperText>
          ) : errorTitle ? (
            <FormHelperText error={true}>Enter Title First</FormHelperText>
          ) : errorDescription ? (
            <FormHelperText error={true}>
              Enter Description First
            </FormHelperText>
          ) : (
            ""
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            variant="outlined"
            color="primary"
            autoFocus
            onClick={showData}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackAlert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleSnackbarClose}
        action={
          <IconButton onClick={handleSnackbarClose}>
            <CloseIcon />
          </IconButton>
        }
      >
        <Alert severity="success" onClose={handleSnackbarClose}>
          NewTodo Added Successfully!!
        </Alert>
      </Snackbar>
    </>
  );
}
