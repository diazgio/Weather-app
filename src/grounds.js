const groundsColors = (data) => {
  const { body } = document;
  if (data.weather[0].icon === '01n') {
    body.style.background = 'linear-gradient(#4b79a1, #283e51)';
  } else if (data.weather[0].main === 'Clouds') {
    body.style.background = 'linear-gradient(#e6dada, #274046)';
  } else if (data.weather[0].main === 'Snow') {
    body.style.background = 'linear-gradient(#2193b0, #6dd5ed)';
  } else if (
    data.weather[0].main === 'Rain'
    || data.weather[0].main === 'Drizzle'
  ) {
    body.style.background = 'linear-gradient(#bbd2c5, #536976, #292e49)';
  } else if (data.weather[0].main === 'Thunderstorm') {
    body.style.background = 'linear-gradient(#536976, #292e49)';
  } else {
    body.style.background = 'linear-gradient(#ffd200, #f7971e)';
  }
};

export default groundsColors;
