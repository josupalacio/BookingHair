import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isBuilding, setIsBuilding] = useState(true);

  if (isBuilding) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-6 animate-pulse tracking-wide">
          💈 BookingHair 💈
        </h1>
        <p className="text-xl mb-4 text-gray-300">Estamos preparando algo especial...</p>
        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHVneWI0a21jYW90bWs3bmR1cjdoYmlxYm50NTB3dW94dzhxZTF1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mOtjMDSDyZQ3u/giphy.gif" alt="" />
        <div className="mt-10 w-20 h-20 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
