import axios from "axios";
import { stringify } from "querystring";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate", {
      token: token,
    });
    console.log(response.data);

    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/signin", {
      email: email,
      password: password,
    });
    return response.data;
  },
  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
  register: async (name: string, email: string, password: string) => {
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });
    console.log(response);
    return response.data;
  },
  userByName: async (name: string) => {
    const response = await api.post("/userByName", {
      name: name,
    });
    return response.data;
  },
  getAllUser: async () => {
    const response = await api.post("/getAllUsers");
    return response.data.users;
  },
});
