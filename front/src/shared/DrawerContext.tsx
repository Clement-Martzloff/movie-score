import React, {
  useReducer,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
} from "react";

enum CommandName {
  TOGGLE_DRAWER = "TOGGLE_DRAWER",
}

interface DrawerState {
  open: boolean;
  drawerWidth: number;
}
interface DrawerCommand {
  name: string;
  body?: DrawerState;
}

type ContextValue = {
  drawerState: DrawerState;
  dispatchCommand: Dispatch<DrawerCommand>;
};

export const { TOGGLE_DRAWER } = CommandName;
export const DrawerContext = createContext<ContextValue | undefined>(undefined);
const initialDrawerState: DrawerState = {
  open: true,
  drawerWidth: 240,
};

function reducer(
  drawerState: DrawerState = initialDrawerState,
  drawerEvent: DrawerCommand
): DrawerState {
  switch (drawerEvent.name) {
    case TOGGLE_DRAWER:
      return { ...drawerState, open: !drawerState.open };
    default:
      return drawerState;
  }
}

export function DrawerContextProvider({ children }: { children: ReactNode }) {
  const [drawerState, dispatchCommand] = useReducer(
    reducer,
    initialDrawerState
  );
  const memoizedContextValue = useMemo(
    () => ({
      drawerState,
      dispatchCommand,
    }),
    [drawerState, dispatchCommand]
  );

  return (
    <DrawerContext.Provider value={memoizedContextValue}>
      {children}
    </DrawerContext.Provider>
  );
}
