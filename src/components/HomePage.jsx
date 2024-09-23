import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../credentials'; // Asegúrate de que esta ruta es correcta

const auth = getAuth(appFirebase);

const HomePage = ({ userEmail }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Usuario desconectado');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2>Bienvenido, {userEmail}!</h2>
      <button onClick={handleLogout} style={styles.logoutButton}>Cerrar Sesión</button>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#6e8efb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default HomePage;
