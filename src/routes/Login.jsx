import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleLogin = () => {
    const credentials = {
      email: email,
      password: password
    };

    const path = 'api/users';

    fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Inicio de sesión exitoso
          setIsLogin(true);
          setLoginError(false);
        } else {
          // Error de inicio de sesión
          setIsLogin(false);
          setLoginError(true);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLogin(false);
        setLoginError(true);
      });
  };

  if (isLogin) {
    return window.location.href = '/orders';
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p>Error de inicio de sesión. Verifica tus credenciales.</p>}
    </div>
  );
}

export default Login;
