import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import { useState } from 'react';

import LoginForm from './components/login/LoginForm'
import Header from './components/header/Header'
import Forum from './components/forum/Forum'
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true
axios.defaults.credentials = 'include'


function App() {

  const [username, setUsername] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['JSESSIONID']);

  function loginUser(username) {
    setUsername(username)
  }

  function logout(e) {
    //e.preventDefault();
    removeCookie('JSESSIONID');
    setUsername("");
  }


  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header username={username} logout={logout} />
            <Forum />
          </Route>
          <Route path="/login">
            <Header username={username} logout={logout} />
            <LoginForm loginUser={loginUser} />
          </Route>
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
