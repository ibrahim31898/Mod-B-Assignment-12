import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const storedData = JSON.parse(localStorage.getItem("user"));

    if (email === '') {
      setEmailError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }

    if (email && password && storedData) {
      if (email === storedData.email && password === storedData.password) {
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return ( 
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <TextField 
          label="Email"
          onChange={e => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />
        <TextField 
          label="Password"
          onChange={e => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <Button variant="outlined" color="secondary" type="submit">Login</Button>
      </form>
      <small>Need an account? <Link to="/signup">Register here</Link></small>
    </React.Fragment>
  );
}

export default Login;
