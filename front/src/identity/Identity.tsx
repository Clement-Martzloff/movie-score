import { Switch, Route } from "react-router-dom";

import RegisterMe from "./RegisterMe";
import GetToken from "./GetToken";

export default function Identity() {
  return (
    <Switch>
      <Route exact path={["/", "/signup"]} component={RegisterMe}></Route>
      <Route exact path={["/signin"]} component={GetToken}></Route>
    </Switch>
  );
}
