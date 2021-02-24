import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UsersList from './pages/UsersList';
import Login from './pages/Login';

import GlobalStyles from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/users" component={ UsersList } />
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Home } />
        </Switch>      
      </Router>
    </div>
  );
}

export default App;
