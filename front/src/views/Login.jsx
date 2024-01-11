import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación
    const usuarioAutenticado = users.find(user => user.name === username && user.password === password);

    if (usuarioAutenticado) {
      console.log(`Usuario autenticado: ${username}`);
      // Redirigir al usuario a /home
      navigate('/home');
    } else {
      console.log('Error de autenticación');
      setShowAlert(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }

    if (e.getModifierState('CapsLock')) {
      setCapsLockOn(true);
    } else {
      setCapsLockOn(false);
    }

    // Ocultar la alerta cuando se empieza a escribir nuevamente
    setShowAlert(false);
  };

  const handleCapsLockChange = (e) => {
    setCapsLockOn(e.getModifierState('CapsLock'));
  };

  const users = [
    { name: "Administrador", password: "admin" },
    // Agrega más usuarios si es necesario
  ];

  // Agregar un event listener para CapsLock
  document.addEventListener('keydown', handleCapsLockChange);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-4 text-green-400">PaseanDog</h2>
        {showAlert && (
          <div className="mb-4 bg-red-500 text-white p-2 rounded">
            Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="username" className="text-green-300 block mb-2">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 bg-gray-700 border border-green-600 rounded text-green-300 focus:outline-none focus:border-green-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-green-300 block mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 bg-gray-700 border border-green-600 rounded text-green-300 focus:outline-none focus:border-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {capsLockOn && (
          <div className="mb-4 bg-yellow-500 text-white p-2 rounded">
            La tecla de bloqueo de mayúsculas está activada.
          </div>
        )}
        <button
          className="w-full bg-green-400 text-black py-2 rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
