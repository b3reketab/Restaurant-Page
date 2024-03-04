import toasted from './toasted.jpg'
import croissant from './croissant.jpg'
import egg from './egg-sandwitch.jpg'

class Menu {
    constructor(name, price, pic) {
        this.name = name
        this.price = price
        this.pic = pic
    }
    info() {
        const itemHolder = document.createElement('ul')
        itemHolder.classList.add('item-list')
        
        const name = document.createElement('li')
        name.innerHTML = this.name

        const price = document.createElement('li')
        price.innerHTML = this.price

        const pic = document.createElement('li')
        pic.classList.add('picture')
                
        const img = new Image()
        img.src = this.pic
        pic.appendChild(img)

        itemHolder.append(name, price, pic)

        return itemHolder
    }
}
const itemOne = new Menu('Croissant', '10$', croissant)
const itemTwo = new Menu('Toasted bread with blueberries', '0$', toasted)
const itemThree = new Menu('Egg Sandwitch', '12$', egg)

export { itemOne, itemTwo, itemThree }