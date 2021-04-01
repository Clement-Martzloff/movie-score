import { Switch, Route } from "react-router-dom";

import DashboardConfig from "./DashboardConfig";

import Header from "../shared/Header";
import NavMenu from "../shared/NavMenu";
import Content from "../shared/Content";

import SearchMovies from "./searchMovies/SearchMovies";

export default function Dashboard() {
  return (
    <DashboardConfig>
      <Header />
      <NavMenu />
      <Content>
        <Switch>
          <Route
            exact
            path={["/", "/dashboard/search-movies"]}
            component={SearchMovies}
          ></Route>
        </Switch>
      </Content>
    </DashboardConfig>
  );
}
