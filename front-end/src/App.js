import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

import LoginForm from './components/login/LoginForm'
import RegisterForm from './components/register/RegisterForm'
import Header from './components/header/Header'
import Forum from './components/forum/Forum'

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
    e.preventDefault();
    removeCookie('JSESSIONID');
    setUsername("");
  }


  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header username={username} logout={logout} />
            <Forum username={username} />
          </Route>
          <Route path="/login">
            <Header username={username} logout={logout} />
            <LoginForm loginUser={loginUser} />
          </Route>
          <Route path="/register">
            <Header username={username} logout={logout} />
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
