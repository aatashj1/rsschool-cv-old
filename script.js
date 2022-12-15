const random = (min, max) => {
 const rand = min + Math.random() * (max - min + 1);
 return Math.floor(rand);
};

const btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
 btn.style.left = `${random(0, 90)}%`;
 btn.style.top = `${random(0, 90)}%`;
});

btn.addEventListener('mouseleave', () => {
 btn.style.left = '1px';
 btn.style.top = '1px';
});

btn.addEventListener('click', () => {
 alert('It is better to write to me on Telegram! King regards 👑☺️');
});