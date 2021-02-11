import './src/style.scss';
import Contents from './src/contents';
import setIcons from "./src/callIcons";

const key = '468b57438c63578229946edbda74f4bf';
// const Skycons = require('skycons')(window);

const inputValue = document.querySelector('.inp-text');
const searchBtn = document.querySelector('.inp-btn');
const canvas = document.querySelector('.info-icon1');



const getWeather = async (value) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`,
    );

    const result = await response.json();
    const data = result;

    Contents(data);
    setIcons(data);
    console.log(data);
  } catch (error) {
    console.log(error)
  }

 
};

getWeather('Lima');