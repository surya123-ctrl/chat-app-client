import React, { useEffect, useState } from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { SocketContext } from './context/SocketContext';
import io from 'socket.io-client'
const App = () => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')));
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    if (authUser) {
      const socket = io(`https://chat-app-server-qa7y.onrender.com/`, {
        query: {
          userId: authUser?._id
        }
      });
      setSocket(socket)
      // console.log("Socket : ", socket);
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users)
      });
      socket.emit('getOnlineUsers');
      // console.log('Online Users: ', onlineUsers)
      return () => socket.close();
    }
    else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser])
  // console.log('AuthUser in app.js', authUser);
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <SocketContext.Provider value={{ socket, onlineUsers }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element={authUser ? <Home /> : <Navigate to='/login' />} />
              <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
              <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
            </Routes>
          </BrowserRouter>
        </SocketContext.Provider>

      </AuthContext.Provider>
    </div>
  )
}

export default App
