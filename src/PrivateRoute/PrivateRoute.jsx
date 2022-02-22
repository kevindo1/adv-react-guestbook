import { Route, useLocation, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { users } = useUser();
  const location = useLocation();

  return (
    <Route {...routeProps}>
      {users ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
    </Route>
  );
}
