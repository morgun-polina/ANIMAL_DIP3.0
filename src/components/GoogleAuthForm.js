import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuthForm = ({ onSuccess, onFailure }) => {
  const responseGoogle = (response) => {
    // Обработка успешной авторизации через Google ааааааа
    onSuccess(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Войти через Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuthForm;
