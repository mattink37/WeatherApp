export interface IForcastWeatherData {
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
