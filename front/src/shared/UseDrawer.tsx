import { useContext } from "react";
import { DrawerContext, TOGGLE_DRAWER } from "./DrawerContext";

function useDrawer() {
  const contextValue = useContext(DrawerContext);

  if (contextValue === undefined) {
    throw new Error(`No provider for drawer context given`);
  }

  const {
    drawerState: { drawerWidth, open },
    dispatchCommand,
  } = contextValue;

  return { drawerWidth, open, dispatchCommand, TOGGLE_DRAWER };
}

export default useDrawer;
