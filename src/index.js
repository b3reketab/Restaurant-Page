import { adress, contactInfo } from './components/contact/contact';
import homepage from './components/home/homepage';
import { itemOne, itemTwo, itemThree } from './components/menu/menu';
import './style.css';

const btnDiv = document.createElement('div');
btnDiv.classList.add('btn-div');

const containerDiv = document.createElement('div');
containerDiv.classList.add('content');

const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
homeBtn.addEventListener('click', () => {
    containerDiv.textContent = '';
    containerDiv.append(homepage().textNode, homepage().imgDiv, homepage().text );
    document.body.appendChild(containerDiv);
});

const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
menuBtn.addEventListener('click', () => {
    containerDiv.textContent = '';
    containerDiv.append(itemOne.info(), itemTwo.info(), itemThree.info());
    document.body.appendChild(containerDiv);
});

const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
contactBtn.addEventListener('click', () => {
    containerDiv.textContent = '';
    containerDiv.append(adress, contactInfo);
    document.body.appendChild(containerDiv);
});

btnDiv.append(homeBtn, menuBtn, contactBtn);
document.body.appendChild(btnDiv);

containerDiv.textContent = '';
containerDiv.append(homepage().textNode, homepage().imgDiv, homepage().text );
document.body.appendChild(containerDiv)

