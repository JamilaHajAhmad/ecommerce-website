const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const xMark = document.getElementById('close');
if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if(xMark) {
    xMark.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}