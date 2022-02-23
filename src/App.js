import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './views/Home';
import Auth from './views/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/">
          <div className="App">
            <Home />
          </div>
        </PrivateRoute>
        <Route exact path="/login">
          <Auth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
