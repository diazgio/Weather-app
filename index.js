import './src/style.scss';
import Contents from './src/contents';
import setIcons from "./src/callIcons";

const key = '468b57438c63578229946edbda74f4bf';
// const Skycons = require('skycons')(window);



const getWeather = async (value) => {
  const body = document.querySelector('body');
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`,
      );
      
      const result = await response.json();
      const data = result;
      console.log(data);
      
      Contents(data);
      setIcons(data);
      
      const searchBtn = document.querySelector('.inp-btn');
      const inputValue = document.querySelector('.inp-text');
      searchBtn.addEventListener('click', e => {
        e.preventDefault();
        body.innerHTML = '';
        getWeather(inputValue.value)
      });
  } catch (error) {
    console.log(error)
  }
};



getWeather('Yaounde');