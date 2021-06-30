import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Div } from "./style";
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/images/logo.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputStyle: {
    minWidth: '400px',
    backgroundColor: 'var(--white)',
    borderColor: 'yellow',
    borderRadius: '5px',
    marginBottom: '30px',
  },
  buttonStyle: {
    width: '400px',
    padding: '10px 0',
    backgroundColor: 'var(--blue)',
    color: 'var(--white)'
  }
});
const Index = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Div.Img src={Logo} alt='logo' />
      <Grid container item xs={12} >
        <Grid item xs={1} md={2} lg={3} />
        <Grid item xs={10} md={8} lg={6}>
          <Div.Form className={classes.form} noValidate autoComplete="off">
            <TextField className={classes.inputStyle} required type='email' id="outlined-basic" label="Enter your email..." variant="outlined" />
            <FormControl className={classes.inputStyle} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControl className={classes.inputStyle} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm your password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Button variant='contained' className={classes.buttonStyle} size='large' color='primary'>Sign up</Button>
            <Div.Info>Already have an account? Log in</Div.Info>
          </Div.Form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index






