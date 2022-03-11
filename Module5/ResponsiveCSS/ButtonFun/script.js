let fontSize = 1;
let padding = 1;
const button = document.querySelector('button');

button.addEventListener('click', () => {
    fontSize += 0.25;
    padding += 2;
    button.style.setProperty(
        '--inflated-size',
        fontSize + 'rem'
    );
    button.style.setProperty(
        '--inflated-padding',
        padding + 'rem'
    );
});