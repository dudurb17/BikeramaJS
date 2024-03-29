import React, { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/user";
import { AuthContext } from "./AuthContext";
import { Race } from "../../types/race";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setuser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setuser(data.user);
        }
      }
    };

    validateToken();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setuser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    setuser(null);
    setToken("");
    await api.logout();
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await api.register(name, email, password);

    return true;
  };

  const userByName = async (name: string) => {
    const data = await api.userByName(name);
    return data;
  };

  const getAllUsers = async () => {
    const data = await api.getAllUser();
    return data;
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const createNewRace = async (race: Race) => {
    const data = await api.createNewRace(race);
    return data;
  };

  const getRank = async () => {
    const data = await api.getRank();
    return data;
  };

  const incrementTurn = async (id: number, qtd: number) => {
    const data = await api.incrementTurn(id, qtd);

    return data.turns;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signout,
        register,
        userByName,
        getAllUsers,
        createNewRace,
        getRank,
        incrementTurn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
