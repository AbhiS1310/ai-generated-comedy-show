import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { server } from '../server';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [script, setScript] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    // Check for token in cookies when the app initializes
    if(!isLoggedIn){
      const getuser = async ()=>{
        try{
            const {data} = await axios.get(`${server}/getuser`,{
              withCredentials: true
            })
            setIsLoggedIn(true);
            setUser(data.user);
          }
          catch(err){
            setIsLoggedIn(false);
            console.log(err);
          }
      }
      getuser();
    }
  });

  const login = () => {
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    axios.get(`${server}/logout`,{
      withCredentials: true
    })
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, script, setScript }}>
      {children}
    </AuthContext.Provider>
  );
};
