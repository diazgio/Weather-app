const inputs = () => {
  const body = document.querySelector('body');

  //--------------Header------------------

  const titleContainer = document.createElement('header');
  titleContainer.classList.add('header');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'Weather App';

  //----------Inputs------------------------

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


  body.appendChild(titleContainer);
  titleContainer.appendChild(title);

  body.appendChild(inputContainer);
  inputContainer.appendChild(inputText);
  inputContainer.appendChild(inputBtn);

  return body;
}

export default inputs;