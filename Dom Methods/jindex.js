const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = 'Hey, Im red';
redText.style.color = 'red';

const blueText = document.createElement('h3');
blueText.classList.add('redText');
blueText.textContent = 'Hey, Im blueh3';
blueText.style.color = 'blue';

const colorDiv = document.createElement('div');
colorDiv.classList.add('colorDiv');
colorDiv.style.backgroundColor = 'pink';
colorDiv.style.border = '1px solid black';

const heading1 = document.createElement('h1');
heading1.textContent = 'Im inside a div!'
colorDiv.appendChild(heading1);

const par1 = document.createElement('p');
par1.textContent = 'Me too!';
colorDiv.appendChild(par1)

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(colorDiv);