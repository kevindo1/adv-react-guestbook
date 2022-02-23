import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { users } = useUser();

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        users ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
