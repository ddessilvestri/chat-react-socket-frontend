import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

  const { auth, verifyToken} = useContext(AuthContext)
  
  useEffect(() => {
    verifyToken();
  }, [verifyToken])
  
  
  if (auth.checking){
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRouter />} />
        {/* <Route path="/chat" element={<ChatPage />} /> */}
        {/* <Route path="/*" element={<Navigate to="/chat" replace />} /> */}
        <Route path="/*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};
