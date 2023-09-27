import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GlobalContext from "../context/GlobalContext";
import { getApiHandler } from "../apiHandler";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export default function MainLayout({ children }) {
  const { user, setUser } = React.useContext(GlobalContext);
  const history = useNavigate();
  const authenticateUser = async () => {
    const token = localStorage.getItem("token");
    const isValidUser = await getApiHandler(`/home`);
    if (!isValidUser.login) {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      setUser({});
      history("/signin");
    } else {
      setUser(isValidUser.user);
    }
  };

  React.useEffect(() => {
    authenticateUser();

    // return () => {
    //   localStorage.removeItem("login");
    //   localStorage.removeItem("token");
    // };
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.name}
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <Button
            color="success"
            variant="contained"
            onClick={() => {
              localStorage.removeItem("login");
              localStorage.removeItem("token");
              setUser({});
              history("/signin");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
