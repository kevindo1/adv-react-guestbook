import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './views/Home';
import Auth from './views/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute>
          <div className="App">
            <Home />
          </div>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
