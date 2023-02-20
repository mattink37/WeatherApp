import axios, { AxiosRequestConfig } from "axios";

export const getCurrentWeather = (query: string) => {
  const config: AxiosRequestConfig = {
    url: `http://api.weatherapi.com/v1/current.json?q=${query}`,
    headers: {
      key: process.env.REACT_APP_API_KEY,
    },
  };
  return axios.request(config).catch((e) => alert(e));
};
