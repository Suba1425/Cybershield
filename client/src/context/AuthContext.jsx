import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('cybershield_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* default fallback */ }
    }
    // Default Demo Student User
    return {
      id: 'demo-user-1',
      name: 'Alex Cybersecurity Student',
      email: 'alex.student@college.edu',
      role: 'student', // 'student' or 'admin'
      isDemo: true
    };
  });

  const [token, setToken] = useState(() => localStorage.getItem('cybershield_token') || null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('cybershield_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('cybershield_user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('cybershield_token', token);
    } else {
      localStorage.removeItem('cybershield_token');
    }
  }, [token]);

  const loginDemoUser = (role = 'student') => {
    const demoUser = role === 'admin' 
      ? { id: 'admin-1', name: 'Prof. Sarah Vance (Admin)', email: 'admin@cybershield.edu', role: 'admin', isDemo: true }
      : { id: 'demo-user-1', name: 'Alex Cybersecurity Student', email: 'alex.student@college.edu', role: 'student', isDemo: true };
    
    setUser(demoUser);
    setToken('demo-jwt-token-xyz-123');
    return demoUser;
  };

  const loginRealUser = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const toggleRole = () => {
    if (user?.role === 'admin') {
      loginDemoUser('student');
    } else {
      loginDemoUser('admin');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loginDemoUser, loginRealUser, logout, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
