import { ReactNode } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useDrawer from "./UseDrawer";

function Content({ children }: { children: ReactNode }) {
  const { drawerWidth, open } = useDrawer();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    contentUnshifted: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShifted: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
  const classes = useStyles();

  return (
    <main
      className={`${classes.root} ${clsx(classes.contentUnshifted, {
        [classes.contentShifted]: open,
      })}`}
    >
      <div className={classes.drawerHeader} />
      <Grid container spacing={3}>
        {children}
      </Grid>
    </main>
  );
}

export default Content;
