import React, {Fragment} from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import {TextField, Button, Typography} from '@mui/material'

const Register = () => {
  return (
    <>
      <Typography variant='h2' padding={3} fontFamily='Popins' textAlign='center'>Регистрация</Typography>
      <Typography variant='body1' marginBottom={3} fontFamily='Popins' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя'/>
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username'/>
       <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email'/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль'/>
       <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Повторите ваш пароль'/>

       <Button sx={{fontFamily:'Popins', marginTop:2, width: '60%', marginBottom:2}} variant="contained">Регистрация</Button>
       <Typography variant='body1' sx={{fontFamily:'Popins'}}>У вас есть аккаунт? <span className='inciting_text'>Авторизация</span></Typography>
    </>
  )
}

export default Register