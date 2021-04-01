import { NavLink, useHistory } from "react-router-dom";
import {
  Drawer,
  IconButton,
  MenuItem,
  ListItemText,
  Divider,
  MenuList,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useDrawer from "./UseDrawer";

function NavMenu() {
  const { drawerWidth, open, dispatchCommand, TOGGLE_DRAWER } = useDrawer();
  const { location } = useHistory();
  const useStyles = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  }));
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => dispatchCommand({ name: TOGGLE_DRAWER })}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <MenuList>
        <NavLink to={"/search-movies"} style={{ textDecoration: "none" }}>
          <MenuItem selected={activeRoute("/search-movies")}>
            <ListItemText primary={"Search movies"} />
          </MenuItem>
        </NavLink>
      </MenuList>
    </Drawer>
  );

  function activeRoute(routeName: any) {
    return location.pathname === routeName ? true : false;
  }
}

export default NavMenu;
