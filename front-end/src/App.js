import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import LoginForm from './components/login/LoginForm'
import Header from './components/header/Header'
import Forum from './components/forum/Forum'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true
axios.defaults.credentials = 'include'

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Header />
          <LoginForm />
        </Route>
        <Route exact path="/">
          <Header />
          <Forum />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
