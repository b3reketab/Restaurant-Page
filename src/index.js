import { home } from './homepage.js'
import { itemOne, itemTwo, itemThree } from './Menu/menu.js'
import './style.css'

const btnDiv = document.createElement('div')
const tabOne = document.createElement('button')
const tabTwo = document.createElement('button')
const div = document.createElement('div')

btnDiv.append(tabOne, tabTwo)

tabOne.textContent = 'Home'
tabTwo.textContent = 'Menu'
div.classList.add('content')
btnDiv.classList.add('btn-div')

document.body.appendChild(btnDiv)
document.body.appendChild(div)

div.append(home().header, home().image, home().text)

tabOne.addEventListener('click', () => {
    div.textContent = ''
    div.append(home().header, home().image, home().text)
})
tabTwo.addEventListener('click', () => {
    div.textContent = ''
    div.append(itemOne.info(), itemTwo.info(), itemThree.info())
})