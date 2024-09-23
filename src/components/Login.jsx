import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css'; // Importa el archivo CSS para los estilos
import appFirebase from '../credentials'; // Importa tu configuración de Firebase

const auth = getAuth(appFirebase); // Inicializa la autenticación

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpiar mensajes de error

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // El usuario ha iniciado sesión
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
      })
      .catch((error) => {
        setError('Error al iniciar sesión: ' + error.message);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Iniciar Sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <p className="forgot-password">¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
};

export default Login;
