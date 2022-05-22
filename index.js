const color_box = document.querySelector('.color_box');
const color_code = document.querySelector('.color_code');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = '#' + randomnumber.toString(16);
    color_box.style.background = randomcode;
    color_code.innerHTML = randomcode;
})