import SetIcons from "./callIcons";

const Contents = (data) => {
  const body = document.querySelector('body');

  const { main } = data;

  const titleContainer = document.createElement('header');
  titleContainer.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Weather App';

  const inputContainer = document.createElement('div');
  inputContainer.classList.add('inp-cont');

  const inputText = document.createElement('input');
  inputText.classList.add('inp-text')
  inputText.type = 'text';
  inputText.placeholder = 'Enter city here';

  const inputBtn = document.createElement('button');
  inputBtn.classList.add('inp-btn');
  inputBtn.type = 'button';
  inputBtn.innerHTML = 'Search';

  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info-cont');

  const infoIconCont = document.createElement('div')
  infoIconCont.classList.add('info-icon-cont');

  const infoIcon = document.createElement('canvas');
  infoIcon.classList.add('info-icon1');
  infoIcon.setAttribute('id', 'icon');
  infoIcon.setAttribute('width', '128');
  infoIcon.setAttribute('height', '128');

  const infoCityCont = document.createElement('div');
  infoCityCont.classList.add('info-city-cont');

  const infoCityName = document.createElement('h2');
  infoCityName.classList.add('info-city-name');
  infoCityName.innerHTML = `${data.name}, ${data.sys.country}`;

  const degreesCont = document.createElement('div');
  degreesCont.classList.add('degrees-cont');

  const infoCityDegrees = document.createElement('h3');
  infoCityDegrees.classList.add('info-city-degrees');
  infoCityDegrees.innerHTML = `Temperature: ${Math.floor(data.main.temp)}`;

  const degreesEscale = document.createElement('h3');
  degreesEscale.classList.add('degrees-escale');
  degreesEscale.innerHTML = '°C';

  const infoCityWheater = document.createElement('h4');
  infoCityWheater.classList.add('info-city-wheater');
  infoCityWheater.innerHTML = `${data['weather'][0]['description']}`;

  const infoDescCont = document.createElement('div');
  infoDescCont.classList.add('info-desc-cont');

  const degreesContMax = document.createElement('div');
  degreesContMax.classList.add('degrees-cont');

  const degreesContMin = document.createElement('div');
  degreesContMin.classList.add('degrees-cont');

  const infoDescTempMax = document.createElement('p');
  infoDescTempMax.classList.add('info-p');
  infoDescTempMax.innerHTML = `Max temp: ${Math.floor(data.main.temp_max)}`;

  const degreesEscale1 = document.createElement('h3');
  degreesEscale1.classList.add('degrees-escale');
  degreesEscale1.innerHTML = '°C';

  const infoDescTempMin = document.createElement('p');
  infoDescTempMin.classList.add('info-p');
  infoDescTempMin.innerHTML = `Min temp: ${Math.floor(data.main.temp_min)}`;

  const degreesEscale2 = document.createElement('h3');
  degreesEscale2.classList.add('degrees-escale');
  degreesEscale2.innerHTML = '°C';

  const infoDescVisibility = document.createElement('p');
  infoDescVisibility.classList.add('info-p');
  infoDescVisibility.innerHTML = `Visibility: ${data.visibility}`;

  const infoDescHumidity = document.createElement('p');
  infoDescHumidity.classList.add('info-p');
  infoDescHumidity.innerHTML = `Humidity: ${data.main.humidity}`;

  const infoDescPressure = document.createElement('p');
  infoDescPressure.classList.add('info-p');
  infoDescPressure.innerHTML = `Pressure: ${data.main.pressure} pascal`;


  body.appendChild(titleContainer);
  titleContainer.appendChild(title);

  body.appendChild(inputContainer);
  inputContainer.appendChild(inputText);
  inputContainer.appendChild(inputBtn);

  body.appendChild(infoContainer);
  infoContainer.appendChild(infoIconCont);
  infoIconCont.appendChild(infoIcon);

  infoContainer.appendChild(infoCityCont);
  infoCityCont.appendChild(infoCityName);
  infoCityCont.appendChild(degreesCont);
  degreesCont.appendChild(infoCityDegrees);
  degreesCont.appendChild(degreesEscale);
  infoCityCont.appendChild(infoCityWheater);

  infoContainer.appendChild(infoDescCont);
  infoDescCont.appendChild(degreesContMax);
  degreesContMax.appendChild(infoDescTempMax);
  degreesContMax.appendChild(degreesEscale1);
  infoDescCont.appendChild(degreesContMin);
  degreesContMin.appendChild(infoDescTempMin);
  degreesContMin.appendChild(degreesEscale2);
  infoDescCont.appendChild(infoDescVisibility);
  infoDescCont.appendChild(infoDescHumidity);
  infoDescCont.appendChild(infoDescPressure);


  return body;
}

export default Contents;