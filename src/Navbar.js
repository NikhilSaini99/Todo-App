import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      {/* By default Appbar Position remains absolute */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo_icon"
            component={Link}
            to="/"
          >
            <PlaylistAddCheckIcon />
          </IconButton>
          <Typography size="inherit" color="inherit" sx={{ flexGrow: 1 }}>
            <b>Todo list App</b>
          </Typography>
          <Button variant="text" color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={Link}
            to="/Login_page"
          >
            Login
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={Link}
            to="/Register_page"
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
