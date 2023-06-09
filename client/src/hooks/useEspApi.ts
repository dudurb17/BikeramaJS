import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_ESP_API,
  baseURL: "http://192.168.1.250",
});

export const useESPApi = () => ({
  initRace: async () => {
    const response = await api.get("/initRace");
    return response.data;
  },
  endRace: async () => {
    const response = await api.get("/endRace");
    return response.data;
  },
});
