import React, { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../../constants/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [merchantID, setMerchantID] = useState(null);
  const [carparkId, setCarparkId] = useState(null);

  async function getUserData(token) {
    const userDataResponse = await fetch(API_URL + "/user/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const userData = await userDataResponse.json();
    return userData.data.Merchant;
  }

  const setSessionData = async (newToken) => {
    setToken(newToken);
    const newMerchantID = await getUserData(newToken);
    setMerchantID(newMerchantID);
    localStorage.setItem("token", newToken);
    localStorage.setItem("expiry", new Date().getTime() + 60 * 2 * 3600);
  };

  const removeSessionData = () => {
    setToken(null);
    setMerchantID(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
  };

  const setCarParkId = (id) => {
    setCarparkId(id);
  };

  useEffect(() => {
    const expiry = localStorage.getItem("expiry");
    if (token && expiry < new Date().getTime()) {
      removeSessionData();
    } else if (token) {
      setSessionData(token, merchantID); // refresh expiry
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        carparkId,
        setSessionData,
        removeSessionData,
        setCarParkId,
        merchantID,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
