import Img from './jason-leung.jpg';

export default () => {
    const homeImg = new Image();
    homeImg.id = 'house-image';
    homeImg.src = Img;

    const imgDiv = document.createElement('div');
    imgDiv.appendChild(homeImg);

    const textNode = document.createTextNode(`Welcome, G's Breakfast Bar.`);

    const text = document.createTextNode('try our delicious menu. Feel like home with our heart warming customer care.');

    return { imgDiv, textNode, text };
};