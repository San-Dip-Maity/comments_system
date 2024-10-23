import React from 'react';
import { Paper, TextField, Button, Box } from '@mui/material';
import { Person, AccountCircle } from '@mui/icons-material';

export const LoginForm = ({ username, setUsername, onLogin }) => (
  <Paper sx={{ p: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Person color="primary" />
      <h2 style={{ margin: 0 }}>Login</h2>
    </Box>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        variant="outlined" 
      />
      <Button 
        variant="contained"
        onClick={onLogin}
        disabled={!username.trim()}
        startIcon={<AccountCircle />}
      >
        Login
      </Button>
    </Box>
  </Paper>
);