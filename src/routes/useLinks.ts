import { useHistory } from 'react-router-dom';
import RoutePatterns from "./RoutePatterns";

export const useLinks = () => {
  const history = useHistory();

  return {
    routeToHome: () => history.push(RoutePatterns.Home),
    routeToPlay: () => history.push(RoutePatterns.Play),
    routeToCredits: () => history.push(RoutePatterns.Credits),
  };
}
