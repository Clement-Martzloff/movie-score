import { Switch, Route } from "react-router-dom";

import RootConfig from "./RootConfig";
import RootMuiTheme from "./RootMuiTheme";

import Identity from "./identity/Identity";
import Dashboard from "./dashboard/Dashboard";

export default function Root() {
  return (
    <RootConfig>
      <RootMuiTheme>
        <Switch>
          <Route path={["/dashboard"]} component={Dashboard} />
          <Route path={["/"]} component={Identity} />
        </Switch>
      </RootMuiTheme>
    </RootConfig>
  );
}
