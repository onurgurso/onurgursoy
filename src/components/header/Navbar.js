import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    padding: "30px",
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "#2efddf",
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    background: "#071c32",
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    color: "#2efddf",
  },
}));

const Navbar = () => {

  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="transparent"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "ltr" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon style={{ fontSize: 40 }} />
            </IconButton>
            <div
              style={{
                height: "100%",
              }}
            >
              <List
                style={{
                  display: "grid",
                  placeContent: "center",
                  height: "80%",
                  width: "100%",
                }}
              >
                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/home">
                    Home
                  </NavLink>
                </ListItem>
                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/about">
                    About
                  </NavLink>
                </ListItem>
                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/projects">
                    Projects
                  </NavLink>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor={"right"}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div
              style={{
                height: "100%",
              }}
            >
              <List
                style={{
                  display: "grid",
                  placeContent: "center",
                  height: "80%",
                  width: "100%",
                }}
              >
                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/home">
                    Home
                  </NavLink>
                </ListItem>

                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/about">
                    About me
                  </NavLink>
                </ListItem>

                <ListItem className={classes.link}>
                  <NavLink activeStyle={{ color: "#FF217C" }} to="/projects">
                    Projects
                  </NavLink>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Navbar;
