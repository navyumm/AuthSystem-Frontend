import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import  Login  from "./components/Login"
import HomePage from './pages/HomePage'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom';
import AuthLayout from "./components/AuthLayout"
import Login from './components/Login'
import Signup from './components/Signup'
import LayoutPage from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthLayout authentication={false}> <LayoutPage /> </AuthLayout>} />
      <Route path="/home" element={<AuthLayout authentication> <HomePage /> </AuthLayout>} />
      <Route path="/login" element={<AuthLayout authentication={false}> <Login /> </AuthLayout>} />
      <Route path="/signup" element={<AuthLayout authentication={false}> <Signup /> </AuthLayout>} />

    </Routes>



      <Toaster
        position="bottom-right"
        reverseOrder={true}
        toastOptions={{
          error: {
            style: { borderRadius: "0", color: "red" },
          },
          success: {
            style: { borderRadius: "0", color: "green" },
          },
          duration: 2000
        }}
      />
    </>

  )
}

export default App
