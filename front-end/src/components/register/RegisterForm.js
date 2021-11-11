import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function RegisterForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const instance = axios.create();
    await instance.post('/register', {
        name: username,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setRedirect(true);
        } else {
          alert("Something went wrong")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

    return  redirect ? (
      <Redirect to="/login" />
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
              <Typography variant="h2">Register</Typography>
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
                  label="Email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
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
                <Button type="submit" variant="contained">Register</Button>
              </Grid>

            </Grid>
          </form>
        </Paper>
      </Box>
    )
}