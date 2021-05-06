import { ChangeEvent, useState } from 'react';
import { Paper, IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });    
  }

  const handleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant='h6' gutterBottom>Sign In</Typography>
      <TextField 
        fullWidth 
        label='Username' 
        margin='dense' 
        name='username' 
        onChange={handleChange}
        type='text'
        value={formData.username} 
        variant='outlined'
      />
      <TextField 
        fullWidth 
        label='Password' 
        margin='dense' 
        name='password'
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        value={formData.password} 
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />      
    </Paper>
  )
}

export default Auth
