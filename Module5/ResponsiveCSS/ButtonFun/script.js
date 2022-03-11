let fontSize = 1;
const button = document.querySelector('button');

button.addEventListener('click', () => {
    fontSize += 0.25;
    button.style.setProperty(
        '--inflated-size',
        fontSize + 'rem'
    );
});