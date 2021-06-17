import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';

import { getAddressInfo } from './api/apiCorreios';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));







export default function SignUp() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cep, setCep] = useState();
  const [dadosApiCorreios, setDadosApiCorreios] = useState({
    logradouro: "",
    uf: "",
    bairro: "",
  });

  console.log("dadosApiCorreios:", dadosApiCorreios)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className="titlename" variant="h5" >Healthy Food</Typography>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate
          onSubmit={(evt) => {
            evt.preventDefault();
            localStorage.setItem('@healthyfood/signup', JSON.stringify({ ...dadosApiCorreios, cep: cep }));


            const oldItems = [JSON.parse(localStorage.getItem('@healthyfood/signup'))];

            const newItems = {'firstName': firstName, 'lastName': lastName, 'email': email, 'password': password}

            oldItems.push(newItems)

            localStorage.setItem('@healthyfood/signup', JSON.stringify(oldItems));
          }}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="CEP"
                label="CEP"
                type="number"
                id="CEP"
                onChange={(e) => setCep(e.target.value)}
                onBlur={() => getAddressInfo(cep)
                  .then(response => {
                    console.log("respons.data:", JSON.stringify(response.data));

                    const { logradouro, uf, bairro } = response.data;
                    setDadosApiCorreios({ ...dadosApiCorreios, logradouro, uf, bairro });
                  })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Adress1"
                label="Address"
                name="Adress1"
                autoComplete="Adress1"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(evt) => {
                  console.log("onchange:", evt.target.value);
                  setDadosApiCorreios({ ...dadosApiCorreios, logradouro: evt.target.value });
                }}
                value={dadosApiCorreios.logradouro}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="uf"
                label="STATE"
                name="uf"
                autoComplete="uf"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(evt) => {
                  console.log("onchange:", evt.target.value);
                  setDadosApiCorreios({ ...dadosApiCorreios, uf: evt.target.value });
                }}
                value={dadosApiCorreios.uf}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bairro"
                label="DISTRICT"
                name="bairro"
                autoComplete="bairro"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(evt) => {
                  console.log("onchange:", evt.target.value);
                  setDadosApiCorreios({ ...dadosApiCorreios, bairro: evt.target.value });
                }}
                value={dadosApiCorreios.bairro}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}