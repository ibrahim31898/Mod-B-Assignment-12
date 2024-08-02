import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      dateOfBirth,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  }

  return (
    <React.Fragment>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant='outlined'
          color='secondary'
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="password"
          variant='outlined'
          color='secondary'
          label="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="date"
          variant='outlined'
          color='secondary'
          label="Date of Birth"
          onChange={e => setDateOfBirth(e.target.value)}
          value={dateOfBirth}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">Register</Button>
      </form>
      <small>Already have an account? <Link to="/login">Login Here</Link></small>
    </React.Fragment>
  );
}

export default Signup;
