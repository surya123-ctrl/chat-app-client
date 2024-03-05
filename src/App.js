import React, { useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
const App = () => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')));
  console.log('AuthUser in app.js', authUser);
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={authUser ? <Home /> : <Navigate to='/login' />} />
            <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
            <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
          </Routes>
        </BrowserRouter>

      </AuthContext.Provider>
    </div>
  )
}

export default App
