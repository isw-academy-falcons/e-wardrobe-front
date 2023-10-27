import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState('');
  const [plan, setPlan] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const value = {
    userId,
    setUserId,
    name,
    setName,
    plan,
    setPlan,
    gender,
    setGender,
    email,
    setEmail,
    token,
    setToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
