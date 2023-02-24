import { useContext, useState } from "react";
import { MyContext } from "./Context";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Divider,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Grid
} from "@mui/material";
import NewTodoButton from "./NewTodoButton";

export default function TodoContent({ deleteTodo, editTodo, displayTodo }) {
  const arrayValue = useContext(MyContext);
  const [dialog, setDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  function handleDialog() {
    setDialog(true);
  }
  function closeDialog() {
    setDialog(false);
  }
  function deletedata(itemId) {
    deleteTodo(itemId);
    setDialog(false);
    setDeleteAlert(true);
  }
  function handleEdit() {
    setIsEdit(!isEdit);
  }
  function alertClose() {
    setDeleteAlert(false);
  }

  return (
    <>
      <NewTodoButton displayTodo={displayTodo} />
      <Grid container rowSpacing={2} columnSpacing={2} padding={2}>
        {arrayValue.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Box sx={{}}>
              <Paper elevation={20}>
                <Card
                  aria-label="My-Todo-Card"
                  // sx={{ backgroundColor: "#CE23FD", color: "#FEFEFE" }}
                >
                  <CardContent>
                    {isEdit ? (
                      <TextField
                        variant="standard"
                        id="edit-todo"
                        value={item.title}
                        onChange={(e) => {
                          editTodo({ ...item, title: e.target.value });
                        }}
                      />
                    ) : (
                      <Typography variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                    )}

                    <Divider color="#424242" />
                    {isEdit ? (
                      <TextField
                        fullWidth
                        variant="standard"
                        id="edit-todo"
                        value={item.description}
                        onChange={(e) => {
                          editTodo({ ...item, description: e.target.value });
                        }}
                      />
                    ) : (
                      <Typography variant="body1" gutterBottom marginTop="10px">
                        {item.description}
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleEdit}
                    >
                      {isEdit ? "Save" : "Edit"}
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={handleDialog}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Paper>

              <br />
              <Dialog
                aria-labelledby="dialog_title"
                aria-describedby="dialog_description"
                open={dialog}
                onClose={closeDialog}
              >
                <DialogTitle id="dialog_title">
                  Are you sure you want to delete?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="dialog_description"></DialogContentText>
                  <DialogActions>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={closeDialog}
                    >
                      No
                    </Button>
                    <Button
                      autoFocus
                      size="small"
                      variant="outlined"
                      onClick={() => deletedata(item.id)}
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Snackbar open={deleteAlert} autoHideDuration={3000} onClose={alertClose}>
        <Alert severity="error" onClose={alertClose}>
          Item Deleted Successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
