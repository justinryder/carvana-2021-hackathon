import { Route, Switch } from 'react-router-dom';
import RoutePatterns from "./RoutePatterns";
import {HomePage} from "./HomePage";
import {PlayPage} from "./PlayPage";
import {CreditsPage} from "./CreditsPage";

export const Routes = () => (
  <Switch>
    <Route path={RoutePatterns.Play}>
      <PlayPage />
    </Route>
    <Route path={RoutePatterns.Credits}>
      <CreditsPage />
    </Route>
    <Route path={RoutePatterns.Home}>
      <HomePage />
    </Route>
  </Switch>
);
