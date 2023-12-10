import Icon from './jason-leung.jpg'

function home() {
    const header = document.createElement('h1')
    const text = document.createElement('p')
    const image = new Image()

    image.src = Icon

    text.textContent = 'Welcome to the best restaurant in town with the best cuisene. Here at Enibla, you will feel like home with our extra-ordinary customer service and electric atmosphere. are you ready to take your dinning experience to the next level?'

    header.textContent = 'Enibla Breakfast Bar'

    return { header, text, image }
}

export { home }