import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/userCredential/login/Login'
import './buttons.css'

function App() {
  const [count, setCount] = useState(0)
  const [isBuilding, setIsBuilding] = useState(true); // If page is being built

  if (isBuilding) {
    return (
      <div className="flex flex-col items-center justify-center overflow-hidden text-white text-center">
        <h1 className="text-5xl font-extrabold mb-6 animate-pulse tracking-wide">💈 BookingHair 💈</h1>
        <p className="text-xl mb-4 text-gray-300">Estamos preparando algo especial...</p>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHVneWI0a21jYW90bWs3bmR1cjdoYmlxYm50NTB3dW94dzhxZTF1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mOtjMDSDyZQ3u/giphy.gif" alt="" />
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-hidden text-white text-center">
        <form>
          <h2>Welcome Back</h2>
          <p>Todavia no tienes cuenta? <a><strong>Accede</strong></a></p>
          {/* Email input*/}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email" />
          {/* Password input*/}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********" />

            <button>
              Iniciar sesion
            </button>
          </form>
      </div>
    </>
  )
}

export default App
