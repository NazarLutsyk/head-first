import { WeatherData } from './WeatherData';
import { ForecastDisplay } from './displays/ForecastDisplay';
import { StatisticsDisplay } from './displays/StatisticsDisplay';
import { CurrentConditionsDisplay } from './displays/CurrentConditionsDisplay';
import { HeatIndexDisplay } from './displays/HeatIndexDisplay';

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);
const heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(30, 65, 30);
weatherData.setMeasurements(32, 70, 29.2);
weatherData.setMeasurements(28, 90, 28);
