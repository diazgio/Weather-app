import './src/style.scss';
import inputs from './src/input';
import contents from './src/contents';
import setIcons from './src/callIcons';
import groundsColors from './src/grounds';

const key = '468b57438c63578229946edbda74f4bf';

inputs();

const getWeather = async (value) => {
  const body = document.querySelector('body');
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`,
    );

    const result = await response.json();
    const data = result;
    console.log(data);

    contents(data);
    setIcons(data);
    groundsColors(data);
    const searchBtn = document.querySelector('.inp-btn');
    const inputValue = document.querySelector('.inp-text');

    searchBtn.addEventListener('click', e => {
      e.preventDefault();
      body.innerHTML = '';
      inputs();
      getWeather(inputValue.value);
    });

    const cityDegrees = document.querySelector('.info-city-degrees');
    const tempMax = document.querySelector('.info-p1');
    const tempMin = document.querySelector('.info-p2');
    const degreesScale = document.querySelector('.degrees-escale');
    const degreesScale1 = document.querySelector('.degrees-escale1');
    const degreesScale2 = document.querySelector('.degrees-escale2');
    const chngBtn = document.querySelector('.change-btn');

    const farenheit = ((data.main.temp) * (9 / 5)) + 32;
    const farenheitMax = ((data.main.temp_max) * (9 / 5)) + 32;
    const farenheitMin = ((data.main.temp_min) * (9 / 5)) + 32;

    chngBtn.addEventListener('click', () => {
      if (degreesScale.textContent === '°C') {
        degreesScale.textContent = 'F';
        degreesScale1.textContent = 'F';
        degreesScale2.textContent = 'F';
        cityDegrees.innerHTML = `Temperature: ${Math.floor(farenheit)}`;
        tempMax.innerHTML = `Max temp: ${Math.floor(farenheitMax)}`;
        tempMin.innerHTML = `Min temp: ${Math.floor(farenheitMin)}`;
      } else {
        degreesScale.textContent = '°C';
        degreesScale1.textContent = '°C';
        degreesScale2.textContent = '°C';
        cityDegrees.innerHTML = `Temperature: ${Math.floor(data.main.temp)}`;
        tempMax.innerHTML = `Max temp: ${Math.floor(data.main.temp_max)}`;
        tempMin.innerHTML = `Min temp: ${Math.floor(data.main.temp_min)}`;
      }
    });
  } catch (error) {
    const inputValue = document.querySelector('.inp-text');
    inputValue.value = '';
    inputValue.placeholder = 'Enter a valid city';
    getWeather('Lima');
  }
};

getWeather('Lima');