import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IForcastWeatherData } from './IWeatherData';

export const getCurrentWeather = async (
  query: string
): Promise<AxiosResponse<IForcastWeatherData> | undefined> => {
  const config: AxiosRequestConfig = {
    url: `http://api.weatherapi.com/v1/current.json?q=${query}`,
    headers: {
      key: process.env.REACT_APP_API_KEY,
    },
  };
  try {
    return await axios.request(config);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const getCurrentForecast = async (
  query: string
): Promise<AxiosResponse<IForcastWeatherData> | undefined> => {
  const config: AxiosRequestConfig = {
    url: `http://api.weatherapi.com/v1/forecast.json?q=${query}`,
    headers: {
      key: process.env.REACT_APP_API_KEY,
    },
  };
  try {
    return await axios.request(config);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
