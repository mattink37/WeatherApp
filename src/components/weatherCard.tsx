import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { getCurrentWeather } from '../businessLogic/appRequest';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

const WeatherCard: React.FC<{}> = () => {
  const [weatherData, setWeatherData] = useState<AxiosResponse | void>();

  useEffect(() => {
    getCurrentWeather('Atlanta').then((res) => setWeatherData(res));
  }, []);

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
