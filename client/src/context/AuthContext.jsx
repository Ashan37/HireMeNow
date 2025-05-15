import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // On mount, fetch the current user (if logged in)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:4000/api/auth/me',
          { withCredentials: true }
        );
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (err) {
        console.error('AuthContext fetchUser:', err);
      }
    };
    fetchUser();
  }, []);

  // Logout helper
  const logout = async () => {
    try {
      await axios.post(
        'http://localhost:4000/api/auth/logout',
        {},                    // no body
        { withCredentials: true }
      );
      setUser(null);
    } catch (err) {
      console.error('AuthContext logout:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
