import React from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import './signUp.css';
import GoogleIcon from '@mui/icons-material/Google';
import useGoogleAuth from '../../hooks/useGoogleAuth';
import useCreateUser from '../../hooks/useCreateUser';

const SignUp = () => {
  const { googleAuth } = useGoogleAuth();
  const {
    getConfirmPass,
    getName,
    getEmail,
    getPassword,
    name,
    email,
    password,
    confirmPass,
    createUser,
  } = useCreateUser();
  return (
    <LoadingSpinner>
      <Box className={'sign'}>
        <Box className={'center around'}>
          <Grid
            container
            spacing={2}
            direction={'column'}
            justifyContent="center"
            alignItems="center"
            className={'signup'}
          >
            <Grid item xs={12}>
              <TextField
                error={name.error}
                id="input_name"
                variant="outlined"
                color="secondary"
                label="Name"
                className={'inputText'}
                onChange={getName}
                value={name.value}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={email.error}
                id="input_email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={getEmail}
                className={'inputText'}
                value={email.value}
                type={'email'}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={password.error}
                id="input_password"
                variant="outlined"
                color="secondary"
                label="Password"
                onChange={getPassword}
                className={'inputText'}
                value={password.value}
                type={'password'}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={confirmPass.error}
                id="input_confirm_password"
                variant="outlined"
                color="secondary"
                label="Password Confirmation"
                onChange={getConfirmPass}
                className={'inputText'}
                type={'password'}
                value={confirmPass.value}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
            </Grid>
            <Grid item xs={5}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={createUser}
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={googleAuth}
                  >
                    {<GoogleIcon />}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <small>
                Already have an account? <Link to={'../signin'}>Sign In</Link>
              </small>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LoadingSpinner>
  );
};

export default SignUp;
