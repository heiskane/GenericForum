import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm({loginUser}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const instance = axios.create();
    await instance.post('/login', new URLSearchParams({
        username: username,
        password: password,
      }))
      .then((res) => {
        if (res.status === 200) {
          //console.log("idk")
        }
      })
      .catch((err) => {
        console.log(err)
      })

    instance.get("/profile")
    .then((res) => {
      loginUser(res.data.name)
      setIsLoggedIn(true);
    })
  }

    return isLoggedIn ? (
      <Redirect to="/" />
      ) : (
      <Box>
        <Paper
          elevation={8}
        >
          <form
            onSubmit={handleSubmit}
          >
            <Grid
              container
              flexDirection='column' 
              justifyContent='center'
              alignItems='center'
              padding={10}
              spacing={2}
            >
              <Typography variant="h2">Login</Typography>
              <Grid item>
                <TextField
                  label="Username"
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={e => setUsername(e.target.value)} />
              </Grid>

              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained">Login</Button>
              </Grid>

            </Grid>
          </form>
        </Paper>
      </Box>
    )
}