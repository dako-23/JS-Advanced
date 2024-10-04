function toggle() {
    const buttonEl = document.querySelector('.button');
    const extraEl = document.querySelector('#extra');

    const initionalDisplay = extraEl.style.display;

    console.log(initionalDisplay);

    if (initionalDisplay == 'block') {
        extraEl.style.display = 'none';
        buttonEl.textContent = 'More';
    } else {
        extraEl.style.display = 'block';
        buttonEl.textContent = 'Less';
    }
}