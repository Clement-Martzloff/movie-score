import { ReactNode } from "react";
import { RelayEnvironmentProvider } from "react-relay";

import relayEnvironment from "../relayEnvironment";
import { DrawerContextProvider } from "../shared/DrawerContext";

export default function DashboardConfig({ children }: { children: ReactNode }) {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <DrawerContextProvider>{children}</DrawerContextProvider>
    </RelayEnvironmentProvider>
  );
}
