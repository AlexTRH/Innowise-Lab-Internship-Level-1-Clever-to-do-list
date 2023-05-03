import React, { useRef, useState } from 'react';
// import { Form, Button, Card } from 'react-bootstrap';
import { TextField, Button, Container, Stack, Box } from '@mui/material';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export const SignUp = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  return (
    <LoadingSpinner>
      <Container maxWidth="sm">
        <Stack alignItems="center">
          <h2 className="">Sign Up</h2>
          <form style={{ marginBottom: '1rem' }}>
            <TextField
              type="name"
              variant="outlined"
              color="secondary"
              label="Name"
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
              value={name}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="email"
              variant="outlined"
              color="secondary"
              label="Email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
              sx={{ mb: 4 }}
            />
            <TextField
              type="password"
              variant="outlined"
              color="secondary"
              label="Password"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              fullWidth
              sx={{ mb: 4 }}
            />
            <TextField
              type="password-cofirm"
              variant="outlined"
              color="secondary"
              label="Password Confirmation"
              ref={passwordConfirmRef}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              value={passwordConfirm}
              required
              fullWidth
              sx={{ mb: 4 }}
            />
            <Button
              variant="outlined"
              color="secondary"
              type="submit"
              style={{ margin: '0 auto', display: 'block' }}
            >
              Sign Up
            </Button>
          </form>

          <small>Already have an account? Sign In</small>
        </Stack>
      </Container>
    </LoadingSpinner>
  );
};
