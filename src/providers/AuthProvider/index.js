import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [carparkId, setCarparkId] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };

    const setCarParkId = (id) => {
        setCarparkId(id);
    }

    return (
        <AuthContext.Provider value={{ token, carparkId, login, logout, setCarParkId }}>
            {children}
        </AuthContext.Provider>
    );
};