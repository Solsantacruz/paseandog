import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [access, setAccess] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:3001/user/login?email=${email}&password=${password}`);
      const data = await response.json();

      if (response.ok) {
        const access = data.access;
        setAccess(access);
        if (!access) {
          console.error('Credenciales incorrectas');
          setShowAlert(true);
        } else {
          navigate('/home');
        }
      } else {
        console.error('Error al iniciar sesión:', data.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      setShowAlert(true);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }

    if (e.getModifierState && e.getModifierState("CapsLock")) {
      setCapsLockOn(true);
    } else {
      setCapsLockOn(false);
    }

    // Ocultar la alerta cuando se empieza a escribir nuevamente
    setShowAlert(false);
  };

  const handleCapsLockChange = (e) => {
    if (e instanceof Event && e.getModifierState) {
      setCapsLockOn(e.getModifierState('CapsLock'));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleCapsLockChange);
    return () => {
      document.removeEventListener("keydown", handleCapsLockChange);
    };
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-4 text-green-400">
          PaseanDog
        </h2>
        {showAlert && (
          <div className="mb-4 bg-red-500 text-white p-2 rounded">
            Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="text-green-300 block mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-gray-700 border border-green-600 rounded text-green-300 focus:outline-none focus:border-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-green-300 block mb-2">
            Contraseña
          </label>
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
