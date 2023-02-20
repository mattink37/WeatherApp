import React from 'react';
import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import { getCurrentWeather } from '../businessLogic/appRequest';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useGeolocated } from 'react-geolocated';

interface IWeatherData {
  location: {
    name: string;
    region: string;
  };
  current: {
    temp_f: string;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const WeatherCard: React.FC<{}> = () => {
  const [weatherData, setWeatherData] =
    useState<AxiosResponse<IWeatherData> | void>();

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      getCurrentWeather(`${coords?.latitude},${coords?.longitude}`).then(
        (res) => setWeatherData(res)
      );
    }
  }, [coords]);

  return (
    <Grid item>
      <Card>
        <CardContent>
          {weatherData?.data ? (
            <>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {weatherData.data.location.name},{' '}
                {weatherData.data.location.region}
              </Typography>
              <Typography variant="h5" component="div">
                {weatherData.data.current.temp_f}° {' and '}
                {weatherData.data.current.condition.text}
              </Typography>
            </>
          ) : (
            <CircularProgress />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
