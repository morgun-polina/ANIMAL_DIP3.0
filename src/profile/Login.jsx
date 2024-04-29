import React, {Fragment} from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import {TextField, Button, Typography} from '@mui/material'

const Login = (props) => {
  const {setPassword, setEmail} = props;
  return (
    <>
      <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Авторизация</Typography>
      <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите ваш email и пароль</Typography>
       <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
       <Button type='submit' sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained">Войти</Button>
       <Typography variant='body1' sx={{fontFamily:'Popins'}}>У вас нет аккаунта? <span className='inciting_text'>Регистрация</span></Typography>
    </>
  )
}

export default Login