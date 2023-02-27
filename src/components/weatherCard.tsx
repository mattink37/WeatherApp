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
import { IForcastWeatherData } from '../businessLogic/IWeatherData';

const WeatherCard: React.FC<{}> = () => {
  const [forcastWeatherData, setForcastWeatherData] =
    useState<AxiosResponse<IForcastWeatherData> | void>();

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    if (coords) {
      getCurrentWeather(`${coords?.latitude},${coords?.longitude}`)
        .then((res): AxiosResponse<IForcastWeatherData> | void =>
          setForcastWeatherData(res)
        )
        .catch((e) => {
          // todo - unhandled for now
        });
    }
  }, [coords]);

  return (
    <Grid item>
      <Card>
        <CardContent>
          {forcastWeatherData?.data ? (
            <>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {forcastWeatherData.data.location.name},{' '}
                {forcastWeatherData.data.location.region}
              </Typography>
              <Typography variant="h5" component="div">
                {forcastWeatherData.data.current.temp_f}° {' and '}
                {forcastWeatherData.data.current.condition.text}
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
