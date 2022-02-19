import { Route, useLocation } from "react-router-dom";

export const RouteWithQuery = ({ children, to, ...props }) => {
  const { search } = useLocation();
  return (
    <Route to={to + search} {...props}>
      {children}
    </Route>
  );
};
